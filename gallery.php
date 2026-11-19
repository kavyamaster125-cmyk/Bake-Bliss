<?php
session_start();
$pageTitle = 'Gallery | Bake Bliss';
$activePage = 'gallery';
include __DIR__ . '/header.php';
?>
<main>
  <section class="page-title"><h2>Our Gallery</h2><p>Explore our sweet creations!</p></section>
  <section class="gallery-grid">
    <?php for ($i = 1; $i <= 10; $i++): ?>
      <img src="assets/g<?php echo $i; ?>.jpg" alt="Bake Bliss creation <?php echo $i; ?>">
    <?php endfor; ?>
  </section>
</main>
<?php include __DIR__ . '/footer.php'; ?>
