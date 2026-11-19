# Bake Bliss — Artisan Baking Recipes Web Application

Bake Bliss is a full-stack PHP & MySQL web application designed for home and professional bakers to browse curated recipes, discover seasonal inspiration, create user accounts, and submit community recipes with images.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Local Setup Guide (XAMPP / Local MySQL)](#local-setup-guide-xampp--local-mysql)
- [Environment Configuration](#environment-configuration)
- [Database Setup & Importing `database.sql`](#database-setup--importing-databasesql)
- [Running with Docker](#running-with-docker)
- [Deploying to a Live Public URL](#deploying-to-a-live-public-url)
  - [Important Note Regarding GitHub Pages](#important-note-regarding-github-pages)
  - [Option 1: Deploy to Railway (Recommended)](#option-1-deploy-to-railway-recommended)
  - [Option 2: Deploy to Render (Docker Web Service)](#option-2-deploy-to-render-docker-web-service)
  - [Option 3: Traditional cPanel / Shared PHP Hosting](#option-3-traditional-cpanel--shared-php-hosting)
- [Git Workflow & Pushing to GitHub](#git-workflow--pushing-to-github)

---

## Features

- **Curated Recipes & Categories**: Cakes, cookies, cupcakes, brownies, muffins, and cheesecakes.
- **User Authentication**: Secure user registration and login utilizing PHP's native `password_hash` and `password_verify` (BCrypt).
- **Community Recipe Submission**: Authenticated users can publish recipes with titles, descriptions, ingredients, step-by-step instructions, and image uploads.
- **Dynamic Community Feed**: Real-time listing of user-submitted recipes on the "Added Recipes" page.
- **Clean Architecture & Zero-Secret Codebase**: Database connection settings read from environment variables with fallback defaults for local XAMPP development.
- **Docker Ready**: Production-ready `Dockerfile` powered by `php:8.2-apache` with dynamic `$PORT` routing.

---

## Tech Stack

- **Backend**: PHP 8.2+ (PDO MySQL extension)
- **Database**: MySQL 5.7+ / 8.0+ or MariaDB 10.4+
- **Web Server**: Apache 2.4 (with `mod_rewrite`)
- **Frontend**: HTML5, Vanilla JavaScript (ES6+), Modern CSS3 (CSS Grid & Flexbox)
- **Containerization**: Docker (Debian-based Apache image)

---

## Project Structure

```text
6_OEP_CO-BTech-III-SEM-V-Div-1_ODD-25/
├── .dockerignore            # Excludes non-essential files from Docker builds
├── .env.example             # Example environment variables template
├── .gitignore               # Excludes secrets, cache, and OS/Razer temp files
├── Dockerfile               # Container build configuration for PHP 8.2 + Apache
├── README.md                # Project documentation and deployment guide
├── database.sql             # MySQL schema definitions for users and recipes tables
├── db.php                   # Database connection singleton & auto-initialization
├── index.php / index.html   # Application landing page
├── header.php / footer.php  # Global layout header and footer components
├── recipes.php              # Curated baking recipes catalogue
├── added-recipes.php        # Community submitted recipes feed
├── submit.php               # Form for authenticated users to post new recipes
├── login.php / login.html   # User login handler and interface
├── signup.php / signup.html # User registration handler and interface
├── logout.php               # Session termination handler
├── upload.php               # Standalone file upload utility
├── assets/                  # CSS styles, JavaScript files, and static images
└── uploads/                 # Storage directory for user-uploaded recipe images
```

---

## Local Setup Guide (XAMPP / Local MySQL)

### Prerequisites

1. **XAMPP** (or equivalent WAMP/MAMP/LAMP stack) with **PHP 8.1+** and **MySQL / MariaDB**.
2. **Git** installed on your system.

### Step 1: Clone or Place into `htdocs`

Ensure the project directory is located inside your web server root, for example:
```text
C:\xampp\htdocs\6_OEP_CO-BTech-III-SEM-V-Div-1_ODD-25
```

### Step 2: Start Apache and MySQL

Open the **XAMPP Control Panel** and click **Start** next to:
- **Apache**
- **MySQL**

### Step 3: Configure Environment Variables

Create your local `.env` configuration file by copying `.env.example`:
```bash
# In PowerShell or Bash
cp .env.example .env
```

Open `.env` in any text editor. If using default XAMPP settings (`root` user with no password), the defaults already match:
```ini
DB_HOST=localhost
DB_PORT=3306
DB_NAME=bakebliss
DB_USER=root
DB_PASS=
```

---

## Database Setup & Importing `database.sql`

You can import the initial schema through any of the following methods:

### Method A: Using phpMyAdmin (Recommended for Beginners)

1. Open your browser and navigate to: [http://localhost/phpmyadmin](http://localhost/phpmyadmin)
2. Click **New** in the left sidebar to create a database named `bakebliss` (collation: `utf8mb4_unicode_ci`).
3. Select the `bakebliss` database, click the **Import** tab at the top.
4. Click **Choose File**, select `database.sql` from your project folder, and click **Import** (or **Go**) at the bottom.

### Method B: Using MySQL Command Line

```bash
# Using XAMPP MySQL binary in PowerShell / Terminal:
C:\xampp\mysql\bin\mysql.exe -u root -p < database.sql
```

### Method C: Automatic Migration via `db.php`

`db.php` contains self-healing schema creation logic. When you visit the app for the first time, if database permissions permit, it will automatically run `CREATE DATABASE IF NOT EXISTS bakebliss` and initialize the `users` and `recipes` tables.

### Step 4: Access the Application

Open your browser and navigate to:
```text
http://localhost/6_OEP_CO-BTech-III-SEM-V-Div-1_ODD-25/
```
Or start the PHP built-in web server:
```bash
php -S localhost:8000
```
Then visit: `http://localhost:8000`

---

## Environment Configuration

| Variable | Description | Default | Example |
| :--- | :--- | :--- | :--- |
| `DB_HOST` | Database host hostname or IP | `localhost` | `127.0.0.1` / `mysql.railway.internal` |
| `DB_PORT` | MySQL connection port | `3306` | `3306` |
| `DB_NAME` | Database name | `bakebliss` | `railway` / `production_db` |
| `DB_USER` | MySQL username | `root` | `root` / `admin` |
| `DB_PASS` | MySQL user password | `""` (empty) | `your_secure_password` |
| `DATABASE_URL` | Full database URL (cloud hosts) | `null` | `mysql://user:pass@host:3306/db` |
| `APP_ENV` | Application environment | `local` | `production` |

---

## Running with Docker

You can build and run the application locally or in containers using Docker:

### 1. Build the Docker Image
```bash
docker build -t bakebliss .
```

### 2. Run the Container
```bash
docker run -d -p 8080:80 --env-file .env --name bakebliss-app bakebliss
```
Access the application at [http://localhost:8080](http://localhost:8080).

---

## Deploying to a Live Public URL

### Important Note Regarding GitHub Pages

> [!IMPORTANT]
> **GitHub Pages cannot run PHP or MySQL.**  
> GitHub Pages is strictly a static web host for HTML, CSS, and client-side JavaScript. Because Bake Bliss requires PHP server-side execution, user session management, file uploads, and a MySQL relational database, it must be deployed to a cloud platform that supports PHP and databases.

Below are step-by-step guides for free and popular hosting platforms.

---

### Option 1: Deploy to Railway (Recommended)

[Railway.app](https://railway.app/) is the fastest and easiest platform to deploy containerized PHP + MySQL apps directly from a GitHub repository.

#### Step 1: Provision a MySQL Database on Railway
1. Sign in to [Railway.app](https://railway.app/) using your GitHub account.
2. Click **New Project** → Select **Provision MySQL**.
3. Railway will provision a managed MySQL instance. Click the MySQL card and select the **Variables** tab to view your credentials (`MYSQLHOST`, `MYSQLPORT`, `MYSQLUSER`, `MYSQLPASSWORD`, `MYSQLDATABASE`, or `MYSQL_URL`).

#### Step 2: Import `database.sql` on Railway
1. Click the MySQL service on your Railway canvas.
2. Open the **Data** or **Query** tab.
3. Paste the contents of `database.sql` and execute the queries (or use the built-in database migration that runs on first app launch).

#### Step 3: Deploy the Web Application
1. In the same project canvas, click **Create** / **New Service** → **GitHub Repo**.
2. Select your repository (`6_OEP_CO-BTech-III-SEM-V-Div-1_ODD-25`).
3. Railway will automatically detect the `Dockerfile` and start the build.

#### Step 4: Configure Environment Variables
1. Click the Web Service card → Go to the **Variables** tab.
2. Add the following environment variables (you can reference Railway's MySQL service variables directly):
   - `DB_HOST` = `${{MySQL.MYSQLHOST}}`
   - `DB_PORT` = `${{MySQL.MYSQLPORT}}`
   - `DB_NAME` = `${{MySQL.MYSQLDATABASE}}`
   - `DB_USER` = `${{MySQL.MYSQLUSER}}`
   - `DB_PASS` = `${{MySQL.MYSQLPASSWORD}}`
   *(Or simply set `DATABASE_URL` = `${{MySQL.MYSQL_URL}}`)*

#### Step 5: Generate Public Domain
1. In the Web Service card, go to **Settings** → **Networking** → Click **Generate Domain**.
2. Your live application will be instantly accessible at: `https://<your-app>.up.railway.app`

---

### Option 2: Deploy to Render (Docker Web Service)

1. Sign in to [Render.com](https://render.com/).
2. **Database**: Provision a free MySQL database on a cloud database provider such as [Aiven](https://aiven.io/), [TiDB Cloud](https://tidbcloud.com/), or [Clever Cloud](https://www.clever-cloud.com/). Import `database.sql` using their web console or phpMyAdmin.
3. **Web Service**:
   - In Render, click **New +** → **Web Service**.
   - Connect your GitHub repository.
   - Set **Runtime** to **Docker** (Render uses the provided `Dockerfile`).
   - Under **Environment Variables**, add:
     - `DB_HOST`: Your cloud database host
     - `DB_PORT`: Database port (e.g., `3306`)
     - `DB_NAME`: Database name
     - `DB_USER`: Database username
     - `DB_PASS`: Database password
4. Click **Create Web Service**. Render builds the container and provides a free SSL domain:
   `https://<your-service>.onrender.com`

---

### Option 3: Traditional cPanel / Shared PHP Hosting

If deploying to traditional shared hosting (e.g., Hostinger, Bluehost, Namecheap, or free hosts like InfinityFree):

1. **Upload Files**: Upload the project files to your hosting server's `public_html` directory via cPanel File Manager or FTP/SFTP (exclude `RazerCortexGameClip` and `.git`).
2. **Create Database**:
   - In cPanel, go to **MySQL Databases** → Create a database (e.g., `user_bakebliss`).
   - Create a MySQL user and assign it to the database with **ALL PRIVILEGES**.
3. **Import SQL**: Open **phpMyAdmin** in cPanel, select your newly created database, and import `database.sql`.
4. **Configure `.env`**: Create a `.env` file in the root of your hosting directory with the database credentials:
   ```ini
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=user_bakebliss
   DB_USER=user_dbuser
   DB_PASS=YourStrongPasswordHere
   ```
5. **Permissions**: Ensure the `uploads/` folder has write permissions (`chmod 755` or `chmod 775`).

---

## Git Workflow & Pushing to GitHub

To push this repository to GitHub, follow these steps in your terminal:

```bash
# 1. Check current repository status
git status

# 2. If you have not created a GitHub repository yet:
#    - Go to https://github.com/new
#    - Create a repository named: 6_OEP_CO-BTech-III-SEM-V-Div-1_ODD-25
#    - Leave it empty (do not initialize with README or license)

# 3. Add your GitHub remote URL (replace <your-username> with your actual GitHub username)
git remote add origin https://github.com/<your-username>/6_OEP_CO-BTech-III-SEM-V-Div-1_ODD-25.git

# 4. Push your commits to GitHub
git push -u origin main
```

---

## License & Credits

Developed as an Open Ended Project (OEP) for B.Tech Semester V.  
All bakery assets and illustrations are licensed for personal and academic use.
