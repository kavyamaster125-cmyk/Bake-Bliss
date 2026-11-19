<?php
// signup.php
session_start();

// --- DB connection (change credentials if needed) ---
try {
    require_once __DIR__ . '/db.php';
    $pdo = bakebliss_db();
} catch (PDOException $e) {
    // In production, don't echo $e->getMessage()
    die("<script>alert('Database connection failed.'); window.location='signup.html';</script>");
}

// --- Collect & sanitize input ---
$fullname = trim($_POST['fullname'] ?? '');
$email    = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

// --- Basic validation ---
if ($fullname === '' || $email === '' || $password === '') {
    die("<script>alert('Please fill all fields.'); window.location='signup.html';</script>");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("<script>alert('Please enter a valid email address.'); window.location='signup.html';</script>");
}

if (strlen($password) < 6) {
    die("<script>alert('Password must be at least 6 characters long.'); window.location='signup.html';</script>");
}

// --- Check if email already exists ---
try {
    $stmt = $pdo->prepare("SELECT id FROM users WHERE email = :email LIMIT 1");
    $stmt->execute(['email' => $email]);
    if ($stmt->fetch(PDO::FETCH_ASSOC)) {
        die("<script>alert('Email is already registered. Try logging in.'); window.location='login.html';</script>");
    }
} catch (PDOException $e) {
    die("<script>alert('Server error. Please try again later.'); window.location='signup.html';</script>");
}

// --- Hash password and insert user ---
$passwordHash = password_hash($password, PASSWORD_DEFAULT);

try {
    $insert = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");
    $insert->execute([
        'name'     => $fullname,
        'email'    => $email,
        'password' => $passwordHash
    ]);

    // get inserted user id
    $userId = $pdo->lastInsertId();

    // set session and redirect
    $_SESSION['user_id'] = $userId;
    $_SESSION['user_name'] = $fullname;

    header('Location: recipes.php');
    exit;
} catch (PDOException $e) {
    // handle duplicate email races or other DB errors
    die("<script>alert('Could not create account. Please try again later.'); window.location='signup.html';</script>");
}
