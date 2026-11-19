<?php
// index.php - main page

session_start();


// featured items data (easy to extend or replace with DB later)
$featured = [
    [
        'img' => 'assets/cake.jpg',
        'alt' => 'Cake',
        'title' => 'Chocolate Cake'
    ],
    [
        'img' => 'assets/cookies.jpg',
        'alt' => 'Cookies',
        'title' => 'Butter Cookies'
    ],
    [
        'img' => 'assets/cupcake.jpg',
        'alt' => 'Cupcake',
        'title' => 'Strawberry Cupcake'
    ],
];

$pageTitle = "Bake Bliss | Home";
$activePage = 'home';
include __DIR__ . '/header.php';
?>

<main>
  <section class="hero">
    <h2>Welcome to Bake Bliss</h2>
    <p>Discover delightful recipes crafted with love — cakes, cookies, muffins and more!</p>
  </section>

  <section class="featured">
    <h3>Featured Treats</h3>
    <div class="card-grid">
      <?php foreach ($featured as $item): ?>
        <div class="card">
          <img src="<?php echo htmlspecialchars($item['img']); ?>"
               alt="<?php echo htmlspecialchars($item['alt']); ?>"
               height="100" width="100">
          <h4><?php echo htmlspecialchars($item['title']); ?></h4>
        </div>
      <?php endforeach; ?>
    </div>
  </section>
</main>

<?php include __DIR__ . '/footer.php'; ?>
