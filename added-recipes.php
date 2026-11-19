<?php
session_start();
require_once __DIR__ . '/db.php';
$recipes = bakebliss_db()->query(
    "SELECT r.*, COALESCE(u.name, 'Bake Bliss User') AS author
     FROM recipes r
     LEFT JOIN users u ON u.id = r.user_id
     ORDER BY r.created_at DESC"
)->fetchAll();
$pageTitle = 'Bake Bliss | Added Recipes';
$activePage = 'added-recipes';
include __DIR__ . '/header.php';
?>
<main>
  <section class="page-title">
    <h2>Added Recipes</h2>
    <p>Recipes shared by our Bake Bliss community.</p>
  </section>

  <?php if (isset($_GET['added'])): ?>
    <p class="notice">Your recipe was added successfully!</p>
  <?php endif; ?>

  <?php if (!$recipes): ?>
    <section class="notice">
      <p>No recipes have been added yet.</p>
      <?php if (isset($_SESSION['user_id'])): ?><p><a href="submit.php">Add the first recipe</a></p><?php endif; ?>
    </section>
  <?php else: ?>
    <section class="added-recipes-grid">
      <?php foreach ($recipes as $recipe):
        $ingredients = json_decode($recipe['ingredients_json'] ?: '[]', true) ?: [];
        $steps = json_decode($recipe['steps_json'] ?: '[]', true) ?: [];
      ?>
        <article class="added-recipe">
          <?php if ($recipe['image_path']): ?>
            <img src="<?php echo htmlspecialchars($recipe['image_path']); ?>" alt="<?php echo htmlspecialchars($recipe['title']); ?>">
          <?php else: ?>
            <div class="recipe-placeholder" aria-hidden="true">🧁</div>
          <?php endif; ?>
          <div class="added-recipe-content">
            <h3><?php echo htmlspecialchars($recipe['title']); ?></h3>
            <p class="recipe-author">Added by <?php echo htmlspecialchars($recipe['author']); ?></p>
            <?php if ($recipe['description']): ?><p><?php echo nl2br(htmlspecialchars($recipe['description'])); ?></p><?php endif; ?>
            <h4>Ingredients</h4>
            <ul><?php foreach ($ingredients as $ingredient): ?><li><?php echo htmlspecialchars($ingredient); ?></li><?php endforeach; ?></ul>
            <h4>Steps</h4>
            <ol><?php foreach ($steps as $step): ?><li><?php echo htmlspecialchars($step); ?></li><?php endforeach; ?></ol>
          </div>
        </article>
      <?php endforeach; ?>
    </section>
  <?php endif; ?>
</main>
<?php include __DIR__ . '/footer.php'; ?>
