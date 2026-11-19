// Current category selected
let currentCategory = "";

// Show category cards
function showCategory(category) {
    currentCategory = category;
    const container = document.getElementById("categoryContainer");
    container.innerHTML = ""; // clear previous cards

    const list = recipes[category];
    if (!list) return;

    list.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
        `;
        card.onclick = () => showRecipeDetail(category, index);
        container.appendChild(card);
    });

    document.getElementById("categoryContainer").style.display = "grid";
    document.getElementById("recipeDetail").style.display = "none";
}

// Show detailed recipe
function showRecipeDetail(category, index) {
    const recipe = recipes[category][index];
    if (!recipe) return;

    document.getElementById("recipeImg").src = recipe.image;
    document.getElementById("recipeTitle").textContent = recipe.name;
    document.getElementById("prepTime").textContent = recipe.prepTime;
    document.getElementById("cookTime").textContent = recipe.cookTime;
    document.getElementById("servings").textContent = recipe.servings;
    document.getElementById("difficulty").textContent = recipe.difficulty;

    // Ingredients
    const ingList = document.getElementById("ingredientsList");
    ingList.innerHTML = "";
    recipe.ingredients.forEach(ing => {
        const li = document.createElement("li");
        li.textContent = ing;
        ingList.appendChild(li);
    });

    // Steps
    const stepList = document.getElementById("stepsList");
    stepList.innerHTML = "";
    recipe.steps.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        stepList.appendChild(li);
    });

    // Tip
    document.getElementById("tip").textContent = recipe.tip || "";

    // Show detail, hide cards
    document.getElementById("categoryContainer").style.display = "none";
    document.getElementById("recipeDetail").style.display = "block";
}

// Back button to category cards
function backToCategory() {
    document.getElementById("recipeDetail").style.display = "none";
    document.getElementById("categoryContainer").style.display = "grid";
}

// Optional: Search function (search by recipe name)
function searchRecipes() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const container = document.getElementById("categoryContainer");
    container.innerHTML = "";

    if (!currentCategory) return;

    const filtered = recipes[currentCategory].filter(r => r.name.toLowerCase().includes(input));

    filtered.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
        `;
        card.onclick = () => showRecipeDetail(currentCategory, index);
        container.appendChild(card);
    });
}
