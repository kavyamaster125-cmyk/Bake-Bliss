<?php
// header.php - top part of page (include on each page)
if (!isset($pageTitle)) {
    $pageTitle = 'Bake Bliss';
}
$activePage = $activePage ?? '';
?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?php echo htmlspecialchars($pageTitle); ?></title>

  <!-- Google fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Great+Vibes&display=swap" rel="stylesheet">

  <!-- main stylesheet -->
  <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
  <header class="header">
    <h1>Bake Bliss</h1>
    <p>"Baking happiness in every bite!"</p>
  </header>

  <nav class="navbar">
    <div class="nav-center">
      <a href="index.php" class="<?php echo $activePage === 'home' ? 'active' : ''; ?>">Home</a>
      <a href="recipes.php" class="<?php echo $activePage === 'recipes' ? 'active' : ''; ?>">Recipes</a>
      <a href="added-recipes.php" class="<?php echo $activePage === 'added-recipes' ? 'active' : ''; ?>">Added Recipes</a>
      <a href="blog.php" class="<?php echo $activePage === 'blog' ? 'active' : ''; ?>">Specials</a>
      <a href="gallery.php" class="<?php echo $activePage === 'gallery' ? 'active' : ''; ?>">Gallery</a>
      <a href="submit.php" class="<?php echo $activePage === 'submit' ? 'active' : ''; ?>">Add Recipe</a>
      <a href="about.php" class="<?php echo $activePage === 'about' ? 'active' : ''; ?>">About</a>
    </div>

    <div class="nav-right">
      
      <?php if (isset($_SESSION['user_id'])): ?>
    <!-- If logged in, show Logout -->
    <span class="welcome-user">Hi, <?php echo htmlspecialchars($_SESSION['user_name']); ?></span>
    <a href="logout.php" class="login-btn">Logout</a>
<?php else: ?>
    <!-- If NOT logged in, show Login -->
    <a href="login.html" class="login-btn">Login</a>
<?php endif; ?>

    </div>
  </nav>
