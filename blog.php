<?php
session_start();
$pageTitle = 'Bake Bliss | Specials';
$activePage = 'blog';
include __DIR__ . '/header.php';
?>
<main>
  <section class="hero"><h2>Whisk, Bake, and Celebrate</h2><p>Explore our special festive cakes for every occasion.</p></section>
  <section class="blog-container" id="blogList"></section>
</main>
<script src="assets/blog.js"></script>
<?php include __DIR__ . '/footer.php'; ?>
