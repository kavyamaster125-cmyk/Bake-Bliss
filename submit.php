<?php
session_start();
if (!isset($_SESSION['user_id'])) { header('Location: login.html?required=1'); exit; }
require_once __DIR__ . '/db.php';
$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = trim($_POST['title'] ?? ''); $description = trim($_POST['description'] ?? '');
    $ingredients = array_values(array_filter(array_map('trim', preg_split('/\r\n|\r|\n|,/', $_POST['ingredients'] ?? ''))));
    $steps = array_values(array_filter(array_map('trim', preg_split('/\r\n|\r|\n/', $_POST['steps'] ?? ''))));
    $imagePath = null;
    if ($title === '') $message = 'Please enter a recipe title.';
    if (!$message && isset($_FILES['image']) && $_FILES['image']['error'] !== UPLOAD_ERR_NO_FILE) {
        $allowed = ['image/jpeg'=>'jpg','image/png'=>'png','image/gif'=>'gif','image/webp'=>'webp'];
        $mime = mime_content_type($_FILES['image']['tmp_name']);
        if ($_FILES['image']['error'] !== UPLOAD_ERR_OK || $_FILES['image']['size'] > 2*1024*1024 || !isset($allowed[$mime])) $message = 'Please use a JPG, PNG, GIF, or WEBP image under 2 MB.';
        else { $name = bin2hex(random_bytes(8)).'.'.$allowed[$mime]; if (move_uploaded_file($_FILES['image']['tmp_name'], __DIR__.'/uploads/'.$name)) $imagePath='uploads/'.$name; else $message='Could not save the image.'; }
    }
    if (!$message) {
        $stmt=bakebliss_db()->prepare('INSERT INTO recipes (user_id,title,description,ingredients_json,steps_json,image_path) VALUES (?,?,?,?,?,?)');
        $stmt->execute([$_SESSION['user_id'],$title,$description,json_encode($ingredients),json_encode($steps),$imagePath]);
        header('Location: added-recipes.php?added=1'); exit;
    }
}
$pageTitle='Bake Bliss | Add Recipe'; $activePage='submit'; include __DIR__.'/header.php';
?>
<main><section class="page-title"><h2>Share Your Recipe</h2><p>Your recipe will appear on the Added Recipes page with your name: <strong><?php echo htmlspecialchars($_SESSION['user_name']); ?></strong></p></section>
<?php if ($message): ?><p class="notice"><?php echo htmlspecialchars($message); ?></p><?php endif; ?>
<section class="form-section"><form method="post" enctype="multipart/form-data">
<label>Recipe title</label><input name="title" required value="<?php echo htmlspecialchars($_POST['title'] ?? ''); ?>">
<label>Short description</label><textarea name="description" rows="3"><?php echo htmlspecialchars($_POST['description'] ?? ''); ?></textarea>
<label>Recipe image (optional)</label><input type="file" name="image" accept="image/jpeg,image/png,image/gif,image/webp">
<label>Ingredients (one per line or comma-separated)</label><textarea name="ingredients" rows="6" required><?php echo htmlspecialchars($_POST['ingredients'] ?? ''); ?></textarea>
<label>Steps (one per line)</label><textarea name="steps" rows="7" required><?php echo htmlspecialchars($_POST['steps'] ?? ''); ?></textarea>
<button type="submit">Add Recipe</button></form></section></main>
<?php include __DIR__.'/footer.php'; ?>
