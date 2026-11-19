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
- [Deploying to a Live Public URL (Permanent Free Options)](#deploying-to-a-live-public-url-permanent-free-options)
  - [Important Note Regarding GitHub Pages](#important-note-regarding-github-pages)
  - [Why Railway Free Trial Expires After 30 Days](#why-railway-free-trial-expires-after-30-days)
  - [Permanent Option 1: Render (Docker) + TiDB Cloud (Free Forever MySQL)](#permanent-option-1-render-docker--tidb-cloud-free-forever-mysql-recommended)
  - [Permanent Option 2: InfinityFree (Dedicated PHP + MySQL Hosting)](#permanent-option-2-infinityfree-dedicated-php--mysql-hosting)
  - [Trial Option 3: Railway (30-Day Free Trial)](#trial-option-3-railway-30-day-free-trial)
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
- **Database**: MySQL 5.7+ / 8.0+ or MariaDB 10.4+ (or TiDB Serverless Cloud)
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
| `DB_HOST` | Database host hostname or IP | `localhost` | `127.0.0.1` / `gateway01.us-east-1.prod.aws.tidbcloud.com` |
| `DB_PORT` | MySQL connection port | `3306` | `3306` / `4000` |
| `DB_NAME` | Database name | `bakebliss` | `bakebliss` / `test` |
| `DB_USER` | MySQL username | `root` | `root` / `3vXYZ.root` |
| `DB_PASS` | MySQL user password | `""` (empty) | `your_secure_password` |
| `DB_SSL` | Enable SSL for remote cloud databases | `false` | `true` |
| `DATABASE_URL` | Full database URL (cloud hosts) | `null` | `mysql://user:pass@host:3306/db?ssl=true` |
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

## Deploying to a Live Public URL (Permanent Free Options)

### Important Note Regarding GitHub Pages

> [!IMPORTANT]
> **GitHub Pages cannot run PHP or MySQL.**  
> GitHub Pages only serves static files (HTML, CSS, JS). Bake Bliss requires PHP server-side execution, user session management, file uploads, and a MySQL relational database.

### Why Railway Free Trial Expires After 30 Days

Railway provides a **$5 one-time trial credit valid for 30 days**. After 30 days, Railway shuts down services unless you upgrade to their paid Hobby plan ($5/month).

If you want a **100% permanently free deployment that never expires**, choose one of the two options below:

---

### Permanent Option 1: Render (Docker) + TiDB Cloud (Free Forever MySQL) (Recommended)

This gives you a permanent, free live public URL connected directly to your GitHub repository with automatic redeploys on every `git push`.

#### Step 1: Create a Free MySQL Database on TiDB Cloud (Never Expires)
1. Go to [TiDB Cloud](https://tidbcloud.com/) and sign up for free (no credit card required).
2. Click **Create Cluster** → Choose **Serverless** (Free 5 GB storage, permanently free).
3. Under **Security Settings**, generate a password and copy your connection credentials:
   - Host (e.g., `gateway01.us-east-1.prod.aws.tidbcloud.com`)
   - Port: `4000`
   - User (e.g., `xxxx.root`)
   - Password
   - Database: `test` (or create `bakebliss`)
4. In TiDB Cloud web console, open **Chat2Query** or **SQL Editor** and run the contents of [database.sql](database.sql) to create the tables.

#### Step 2: Deploy Web App on Render (Free Forever)
1. Go to [Render.com](https://render.com/) and sign in with your GitHub account.
2. Click **New +** → **Web Service**.
3. Select your repository: `6_OEP_CO-BTech-III-SEM-V-Div-1_ODD-25`.
4. Choose **Docker** as the Runtime (Render automatically detects your [Dockerfile](Dockerfile)).
5. Under **Instance Type**, choose **Free**.
6. Under **Environment Variables**, click **Add Environment Variable**:
   - `DB_HOST`: *(Your TiDB Cloud host)*
   - `DB_PORT`: `4000`
   - `DB_NAME`: `test` (or `bakebliss`)
   - `DB_USER`: *(Your TiDB Cloud user)*
   - `DB_PASS`: *(Your TiDB Cloud password)*
   - `DB_SSL`: `true`
7. Click **Create Web Service**. Render builds the image and gives you a free live URL with HTTPS (e.g., `https://bakebliss.onrender.com`).

---

### Permanent Option 2: InfinityFree (Dedicated PHP + MySQL Hosting)

[InfinityFree](https://www.infinityfree.com/) provides permanent free hosting specifically designed for PHP and MySQL with no time limits.

1. Sign up for a free account at [InfinityFree](https://www.infinityfree.com/).
2. Create a new account and choose a free subdomain (e.g., `bakebliss.infinityfreeapp.com`).
3. In the control panel, open **MySQL Databases** and create a database (e.g., `if0_xxxx_bakebliss`).
4. Click **phpMyAdmin** next to the database, go to **Import**, and upload [database.sql](database.sql).
5. Open the **Online File Manager** (or connect via FTP) and upload the project files into the `htdocs/` folder.
6. Create a `.env` file in `htdocs/` with your InfinityFree MySQL host, database name, user, and password:
   ```ini
   DB_HOST=sqlxxx.infinityfree.com
   DB_PORT=3306
   DB_NAME=if0_xxxx_bakebliss
   DB_USER=if0_xxxx
   DB_PASS=YourHostingPassword
   ```
7. Your app is live permanently at `https://bakebliss.infinityfreeapp.com`.

---

### Trial Option 3: Railway (30-Day Free Trial)

If you only need a quick live demo for testing or a 30-day class evaluation:
1. Sign in to [Railway.app](https://railway.app/) using GitHub.
2. Click **New Project** → **Provision MySQL**.
3. Click **New Service** → **GitHub Repo** → select `6_OEP_CO-BTech-III-SEM-V-Div-1_ODD-25`.
4. Add environment variable: `DATABASE_URL` = `${{MySQL.MYSQL_URL}}`.
5. Under **Settings** → **Networking**, click **Generate Domain**.

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
