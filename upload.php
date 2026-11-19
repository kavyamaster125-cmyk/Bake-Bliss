<?php
require_once __DIR__ . '/db.php';
$pdo = bakebliss_db();

// Ensure uploads table exists if this standalone script is accessed
$pdo->exec("CREATE TABLE IF NOT EXISTS uploads (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    filepath VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");

// Fetch uploaded files
$stmt = $pdo->query("SELECT id, filename, filepath FROM uploads ORDER BY id DESC");
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!doctype html>
<html>
<body>
<h2>Uploaded Files</h2>
<ul>
<?php foreach ($rows as $r): ?>
    <li>
        <?php echo htmlspecialchars($r['filename']); ?> —
        <a href="<?php echo htmlspecialchars($r['filepath']); ?>" target="_blank">Open</a>
    </li>
<?php endforeach; ?>
</ul>
</body>
</html>
