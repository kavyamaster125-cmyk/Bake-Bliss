<?php
session_start();
$pageTitle = 'Bake Bliss | Recipes';
$activePage = 'recipes';
include __DIR__ . '/header.php';
?>
<main>
  <section class="page-title"><h2>Recipes</h2><p>Sweet creations made with love.</p></section>
  <h3 class="section-title">Browse Recipe Collection</h3>
  <div class="subnav">
    <button onclick="showCategory('cake')">Cakes</button><button onclick="showCategory('cheesecake')">Cheesecakes</button>
    <button onclick="showCategory('muffins')">Muffins</button><button onclick="showCategory('cookies')">Cookies</button>
    <button onclick="showCategory('brownies')">Brownies</button><button onclick="showCategory('donuts')">Donuts</button>
  </div>
  <section id="categoryContainer" class="card-grid"></section>
  <section id="recipeDetail" class="recipe-detail" style="display:none">
    <img id="recipeImg" src="" alt="Recipe"><h2 id="recipeTitle"></h2>
    <p><strong>Prep:</strong> <span id="prepTime"></span> | <strong>Cook:</strong> <span id="cookTime"></span> | <strong>Servings:</strong> <span id="servings"></span> | <strong>Difficulty:</strong> <span id="difficulty"></span></p>
    <h3>Ingredients</h3><ul id="ingredientsList"></ul><h3>Steps</h3><ol id="stepsList"></ol><h3>Tip</h3><p id="tip"></p>
    <button onclick="backToCategory()">Back to category</button>
  </section>
</main>
<script src="assets/recipes.js"></script><script src="assets/app.js"></script>
<script>showCategory('cake');</script>
<?php include __DIR__ . '/footer.php'; ?>
