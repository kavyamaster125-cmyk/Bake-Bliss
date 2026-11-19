const blogs = [
  {
    title: "🎉 Birthday Cake Delight",
    image: "assets/images/blog-birthday.jpg",
    intro: "Celebrate your special day with layers of fluffy vanilla sponge, rich frosting, and love baked into every bite.",
    ingredients: [
      "2 cups all-purpose flour",
      "1 ½ cups sugar",
      "1 cup milk",
      "½ cup butter (softened)",
      "2 tsp baking powder",
      "1 tsp vanilla extract",
      "2 eggs"
    ],
    steps: [
      "Preheat oven to 180°C and grease your cake pan.",
      "Mix flour and baking powder in a bowl.",
      "Beat butter and sugar until creamy, then add eggs and vanilla.",
      "Slowly add dry ingredients alternating with milk.",
      "Bake for 30–35 mins or until golden.",
      "Cool and decorate with buttercream frosting & sprinkles!"
    ],
    tips: "Use room temperature ingredients for a fluffier cake."
  },
  {
    title: "🎄 Christmas Chocolate Fruit Cake",
    image: "assets/images/blog-christmas.jpg",
    intro: "A rich and moist fruit cake filled with the warmth of the season — nuts, cocoa, and festive spices.",
    ingredients: [
      "1 cup mixed dried fruits",
      "½ cup chopped nuts",
      "1 cup flour",
      "½ cup butter",
      "½ cup brown sugar",
      "2 tbsp cocoa powder",
      "½ cup milk",
      "1 tsp cinnamon powder",
      "½ tsp nutmeg"
    ],
    steps: [
      "Soak dried fruits overnight in orange juice.",
      "Preheat oven to 160°C and line a baking tin.",
      "Cream butter and sugar, add milk, cocoa, and spices.",
      "Fold in flour, nuts, and soaked fruits.",
      "Bake for 45–50 mins until firm.",
      "Cool and dust with icing sugar or drizzle with chocolate glaze."
    ],
    tips: "Wrap in foil and let it sit for a day for deeper flavor!"
  },
  {
    title: "💘 Valentine’s Strawberry Heart Cake",
    image: "assets/images/blog-valentine.jpg",
    intro: "Soft pink sponge with fresh strawberries and whipped cream — the perfect way to say ‘I love you’.",
    ingredients: [
      "1 ½ cups flour",
      "1 cup sugar",
      "½ cup strawberry puree",
      "½ cup butter",
      "2 eggs",
      "1 tsp baking powder",
      "1 cup whipped cream"
    ],
    steps: [
      "Preheat oven to 175°C and grease a heart-shaped pan.",
      "Cream butter and sugar, then add eggs and strawberry puree.",
      "Add dry ingredients and mix until smooth.",
      "Bake for 30 mins, cool, and frost with whipped cream.",
      "Decorate with sliced strawberries and pink sprinkles."
    ],
    tips: "Chill the cake before serving for a refreshing flavor."
  }
];

function displayBlogs() {
  const blogList = document.getElementById("blogList");
  blogList.innerHTML = blogs.map(blog => `
    <article class="blog-card pastel-card">
      <img src="${blog.image}" alt="${blog.title}" class="blog-img" />
      <div class="blog-content">
        <h3 class="blog-title">${blog.title}</h3>
        <p class="blog-intro">${blog.intro}</p>
        <h4>🧁 Ingredients:</h4>
        <ul>${blog.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
        <h4>👩‍🍳 Steps:</h4>
        <ol>${blog.steps.map(s => `<li>${s}</li>`).join("")}</ol>
        <p class="tips"><strong>✨ Tip:</strong> ${blog.tips}</p>
      </div>
    </article>
  `).join("");
}

displayBlogs();
