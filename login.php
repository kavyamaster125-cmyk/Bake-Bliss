<?php
// login.php

session_start();

// ---- DATABASE CONNECTION ----
try {
    require_once __DIR__ . '/db.php';
    $pdo = bakebliss_db();
} 
catch (PDOException $e) {
    $err = addslashes($e->getMessage());
    die("<script>alert('Database connection failed: " . $err . "'); window.location='login.html';</script>");
}

// ---- FORM VALUES ----
$email = $_POST['email'] ?? '';
$pass  = $_POST['password'] ?? '';

// ---- VALIDATION ----
if (empty($email) || empty($pass)) {
    die("<script>alert('Please fill all fields'); window.location='login.html';</script>");
}

// ---- CHECK USER ----
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email LIMIT 1");
$stmt->execute(['email' => $email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    die("<script>alert('Invalid email'); window.location='login.html';</script>");
}

// ---- VERIFY PASSWORD ----
if (!password_verify($pass, $user['password'])) {
    die("<script>alert('Incorrect password'); window.location='login.html';</script>");
}

// ---- SUCCESS -> STORE SESSION ----
$_SESSION['user_id'] = $user['id'];
$_SESSION['user_name'] = $user['name'];

header("Location: recipes.php");
exit();
?>
