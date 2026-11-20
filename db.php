<?php
/**
 * Bake Bliss - Database Connection & Initialization
 *
 * Configurable via environment variables (with fallback defaults for local XAMPP/MySQL).
 * Supports standard DB_* variables as well as cloud-provided DATABASE_URL / MYSQL_URL strings.
 */

if (!function_exists('bakebliss_load_env')) {
    /**
     * Loads environment variables from a local .env file if present.
     */
    function bakebliss_load_env(?string $path = null): void
    {
        $path = $path ?? __DIR__ . '/.env';
        if (!file_exists($path) || !is_readable($path)) {
            return;
        }

        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        if ($lines === false) {
            return;
        }

        foreach ($lines as $line) {
            $line = trim($line);
            // Skip empty lines and comment lines
            if ($line === '' || strpos($line, '#') === 0) {
                continue;
            }
            if (strpos($line, '=') !== false) {
                list($key, $val) = explode('=', $line, 2);
                $key = trim($key);
                $val = trim($val);

                // Strip surrounding quotes
                $len = strlen($val);
                if ($len >= 2 && (($val[0] === '"' && $val[$len - 1] === '"') || ($val[0] === "'" && $val[$len - 1] === "'"))) {
                    $val = substr($val, 1, -1);
                }

                if (!array_key_exists($key, $_SERVER) && !array_key_exists($key, $_ENV)) {
                    putenv("{$key}={$val}");
                    $_ENV[$key] = $val;
                    $_SERVER[$key] = $val;
                }
            }
        }
    }
}

if (!function_exists('bakebliss_env')) {
    /**
     * Retrieves an environment variable with a fallback default.
     */
    function bakebliss_env(string $key, ?string $default = null): ?string
    {
        $val = getenv($key);
        if ($val !== false && $val !== '') {
            return $val;
        }
        if (isset($_ENV[$key]) && $_ENV[$key] !== '') {
            return (string)$_ENV[$key];
        }
        if (isset($_SERVER[$key]) && $_SERVER[$key] !== '') {
            return (string)$_SERVER[$key];
        }
        return $default;
    }
}

if (!function_exists('bakebliss_db')) {
    /**
     * Returns a singleton PDO connection instance and ensures core tables exist.
     */
    function bakebliss_db(): PDO
    {
        static $pdo = null;
        if ($pdo !== null) {
            return $pdo;
        }

        // Load local .env file if available
        bakebliss_load_env();

        // Default connection settings (defaults configured for local XAMPP/MySQL)
        $host = bakebliss_env('DB_HOST', 'localhost');
        $port = bakebliss_env('DB_PORT', '3306');
        $name = bakebliss_env('DB_NAME', 'bakebliss');
        $user = bakebliss_env('DB_USER', 'root');
        $pass = bakebliss_env('DB_PASS', '');
        $ssl  = bakebliss_env('DB_SSL', 'false');

        // Support cloud database connection URLs (e.g., Railway, Render, TiDB Cloud, Aiven, Clever Cloud)
        $dbUrl = bakebliss_env('DATABASE_URL') ?: bakebliss_env('MYSQL_URL') ?: bakebliss_env('JAWSDB_URL') ?: bakebliss_env('CLEARDB_DATABASE_URL');
        if ($dbUrl) {
            $parsed = parse_url($dbUrl);
            if ($parsed) {
                if (!empty($parsed['host'])) {
                    $host = $parsed['host'];
                }
                if (!empty($parsed['port'])) {
                    $port = (string)$parsed['port'];
                }
                if (!empty($parsed['user'])) {
                    $user = urldecode($parsed['user']);
                }
                if (isset($parsed['pass'])) {
                    $pass = urldecode($parsed['pass']);
                }
                if (!empty($parsed['path'])) {
                    $dbPath = ltrim($parsed['path'], '/');
                    if ($dbPath !== '') {
                        $name = $dbPath;
                    }
                }
                if (!empty($parsed['query']) && (strpos($parsed['query'], 'ssl') !== false)) {
                    $ssl = 'true';
                }
            }
        }

        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
$dbHost = $_ENV['DB_HOST'] ?? getenv('DB_HOST') ?? 'gateway01.ap-northeast-1.prod.aws.tidbcloud.com';
$dbPort = $_ENV['DB_PORT'] ?? getenv('DB_PORT') ?? '4000';
$dbName = $_ENV['DB_NAME'] ?? getenv('DB_NAME') ?? 'test';
$dbUser = $_ENV['DB_USER'] ?? getenv('DB_USER') ?? '2jaAwRS9k2JaqJh.root';
$dbPass = $_ENV['DB_PASS'] ?? getenv('DB_PASS') ?? '';
$dbSsl  = filter_var($_ENV['DB_SSL'] ?? getenv('DB_SSL') ?? 'true', FILTER_VALIDATE_BOOLEAN);

$dsn = "mysql:host={$dbHost};port={$dbPort};dbname={$dbName};charset=utf8mb4";

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

if ($dbSsl) {
    if (defined('PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT')) {
        $options[PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT] = false;
    }
    $sslCa = $_ENV['DB_SSL_CA'] ?? getenv('DB_SSL_CA') ?? '';
    if (!empty($sslCa) && defined('PDO::MYSQL_ATTR_SSL_CA')) {
        $options[PDO::MYSQL_ATTR_SSL_CA] = $sslCa;
    }
}

$pdo = new PDO($dsn, $dbUser, $dbPass, $options);
        // If SSL is requested or detected (e.g., TiDB Cloud Serverless or Aiven), enable PDO SSL options
        if ($ssl === 'true' || $ssl === '1') {
            $options[PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT] = false;
        }

        try {
            // First attempt: Connect directly to target database
            $dsn = "mysql:host={$host};port={$port};dbname={$name};charset=utf8mb4";
            $pdo = new PDO($dsn, $user, $pass, $options);
        } catch (PDOException $e) {
            // Error code 1049 indicates the database does not exist yet.
            // On local setups, attempt to create the database automatically.
            $isUnknownDb = ($e->getCode() === 1049 || strpos($e->getMessage(), 'Unknown database') !== false);
            if ($isUnknownDb) {
                try {
                    $serverDsn = "mysql:host={$host};port={$port};charset=utf8mb4";
                    $pdo = new PDO($serverDsn, $user, $pass, $options);
                    $pdo->exec("CREATE DATABASE IF NOT EXISTS `{$name}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
                    $pdo->exec("USE `{$name}`");
                } catch (PDOException $createEx) {
                    throw new PDOException("Database '{$name}' does not exist and could not be auto-created: " . $createEx->getMessage(), (int)$createEx->getCode(), $createEx);
                }
            } else {
                throw $e;
            }
        }

        // Ensure users table exists
        $pdo->exec("CREATE TABLE IF NOT EXISTS users (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(190) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");

        // Ensure recipes table exists
        $pdo->exec("CREATE TABLE IF NOT EXISTS recipes (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            user_id INT UNSIGNED NULL,
            title VARCHAR(180) NOT NULL,
            description TEXT NULL,
            ingredients_json LONGTEXT NULL,
            steps_json LONGTEXT NULL,
            image_path VARCHAR(255) NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            INDEX (user_id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");

        // Backward compatibility: add user_id column if migrating an older table structure
        try {
            $pdo->exec("ALTER TABLE recipes ADD COLUMN user_id INT UNSIGNED NULL AFTER id");
        } catch (PDOException $e) {
            // Column already exists, safe to ignore
        }

        return $pdo;
    }
}
