const recipes = {
  // 🎂 CAKES
  cake: [
    {
      name: "Chocolate Truffle Cake",
      image: "assets/images/cake1.jpg",
      prepTime: "30 mins",
      cookTime: "45 mins",
      servings: "8",
      difficulty: "Medium",
      ingredients: ["1 ½ cups flour","1 cup sugar","¾ cup cocoa powder","2 eggs","½ cup butter","1 cup milk","1 tsp baking powder","½ tsp baking soda"],
      steps: ["Preheat oven to 180°C.","Mix dry ingredients.","Combine wet ingredients.","Mix both and pour into pan.","Bake 45 minutes and frost."],
      tip: "Use high-quality cocoa powder for richer flavor."
    },
    {
      name: "Vanilla Sponge Cake",
      image: "assets/images/cake2.jpg",
      prepTime: "20 mins",
      cookTime: "30 mins",
      servings: "8",
      difficulty: "Easy",
      ingredients: ["2 cups flour","1 ½ cup sugar","3 eggs","1 cup milk","½ cup butter","2 tsp vanilla extract","1 tbsp baking powder"],
      steps: ["Preheat oven to 175°C.","Whip eggs and sugar until fluffy.","Mix dry ingredients and fold into eggs.","Add milk and butter.","Bake 30 mins."],
      tip: "Sift flour for a soft and airy texture."
    },
    {
      name: "Red Velvet Cake",
      image: "assets/images/cake3.jpg",
      prepTime: "25 mins",
      cookTime: "35 mins",
      servings: "8",
      difficulty: "Medium",
      ingredients: ["2 ½ cups flour","1 ½ cups sugar","1 tsp cocoa powder","1 ½ cups buttermilk","2 eggs","½ cup butter","2 tsp red food coloring","1 tsp vanilla","1 tsp baking soda"],
      steps: ["Preheat oven to 175°C.","Mix dry ingredients.","Add wet ingredients and fold in food coloring.","Pour into pans.","Bake 35 mins and frost with cream cheese icing."],
      tip: "Use room temperature ingredients for better mixing."
    },
    {
      name: "Lemon Drizzle Cake",
      image: "assets/images/cake4.jpg",
      prepTime: "20 mins",
      cookTime: "40 mins",
      servings: "8",
      difficulty: "Easy",
      ingredients: ["2 cups flour","1 cup sugar","3 eggs","½ cup butter","1/3 cup lemon juice","Zest of 2 lemons","1 tsp baking powder"],
      steps: ["Preheat oven to 180°C.","Cream butter and sugar.","Add eggs one by one.","Fold in flour and lemon zest.","Bake 40 mins and drizzle lemon syrup."],
      tip: "Zest lemons finely for a stronger flavor."
    },
    {
      name: "Carrot Cake",
      image: "assets/images/cake5.jpg",
      prepTime: "25 mins",
      cookTime: "45 mins",
      servings: "8",
      difficulty: "Medium",
      ingredients: ["2 cups flour","1 ½ cup sugar","3 eggs","1 cup grated carrot","½ cup oil","1 tsp cinnamon","1 tsp baking powder","½ cup chopped walnuts"],
      steps: ["Preheat oven to 180°C.","Mix dry ingredients.","Add wet ingredients and carrots.","Fold in walnuts.","Bake 45 mins and frost with cream cheese icing."],
      tip: "Grate carrots finely to keep the texture smooth."
    }
  ],

  // 🍮 CHEESECAKES
  cheesecake: [
    {
      name: "Classic New York Cheesecake",
      image: "assets/images/cheesecake1.jpg",
      prepTime: "25 mins",
      cookTime: "1 hr",
      servings: "10",
      difficulty: "Medium",
      ingredients: ["2 cups cream cheese","1 cup sugar","3 eggs","1 tsp vanilla extract","1 cup sour cream","1 ½ cups graham cracker crumbs","¼ cup melted butter"],
      steps: ["Preheat oven to 160°C.","Mix crumbs with butter and press into pan.","Beat cream cheese and sugar.","Add eggs and vanilla.","Bake 1 hr and chill."],
      tip: "Don’t overbeat — keeps cheesecake smooth and crack-free!"
    },
    {
      name: "Blueberry Cheesecake",
      image: "assets/images/cheesecake2.jpg",
      prepTime: "20 mins",
      cookTime: "45 mins",
      servings: "8",
      difficulty: "Easy",
      ingredients: ["1 cup digestive biscuit crumbs","¼ cup melted butter","2 cups cream cheese","¾ cup sugar","1 egg","1 tsp vanilla","½ cup blueberry compote"],
      steps: ["Preheat oven to 170°C.","Mix crumbs and butter, press into base.","Beat cream cheese, sugar, and vanilla; add egg.","Pour into pan and bake 40 mins.","Cool, then spread blueberry compote on top and chill."],
      tip: "Use frozen blueberries cooked with sugar for an easy topping."
    },
    {
      name: "Chocolate Swirl Cheesecake",
      image: "assets/images/cheesecake3.jpg",
      prepTime: "30 mins",
      cookTime: "50 mins",
      servings: "8",
      difficulty: "Medium",
      ingredients: ["2 cups cream cheese","1 cup sugar","3 eggs","100g melted dark chocolate","1 tsp vanilla","1 ½ cups cookie crumbs","¼ cup melted butter"],
      steps: ["Preheat oven to 160°C.","Combine crumbs and butter, press into base.","Beat cream cheese and sugar until smooth, add eggs.","Divide batter in two parts — mix melted chocolate into one.","Alternate spoonfuls and swirl. Bake 50 mins."],
      tip: "Run a knife through the batter for beautiful marbled patterns."
    },
    {
      name: "Strawberry No-Bake Cheesecake",
      image: "assets/images/cheesecake4.jpg",
      prepTime: "20 mins + chill 4 hrs",
      cookTime: "0 mins",
      servings: "8",
      difficulty: "Easy",
      ingredients: ["1 ½ cups digestive biscuit crumbs","¼ cup melted butter","2 cups cream cheese","½ cup powdered sugar","1 cup whipped cream","½ cup strawberry puree"],
      steps: ["Mix crumbs and butter, press into pan, and chill.","Beat cream cheese and sugar until smooth.","Fold in whipped cream and strawberry puree.","Pour over crust and refrigerate 4–5 hours.","Top with sliced strawberries before serving."],
      tip: "Use chilled mixing bowls to get smooth, creamy texture!"
    },
    {
      name: "Oreo Cheesecake",
      image: "assets/images/cheesecake5.jpg",
      prepTime: "25 mins",
      cookTime: "45 mins",
      servings: "8",
      difficulty: "Medium",
      ingredients: ["20 Oreo cookies (crushed)","¼ cup melted butter","2 cups cream cheese","¾ cup sugar","2 eggs","1 tsp vanilla","5 crushed Oreos for filling"],
      steps: ["Preheat oven to 170°C.","Mix Oreo crumbs and butter, press into base.","Beat cream cheese and sugar, add eggs and vanilla.","Fold in crushed Oreos and pour over crust.","Bake 45 mins, cool completely, chill."],
      tip: "Top with whipped cream and half an Oreo for the perfect finish!"
    }
  ],

  // 🧁 MUFFINS
  muffins: [
    {
      name: "Blueberry Muffins",
      image: "assets/images/muffin1.jpg",
      prepTime: "15 mins",
      cookTime: "25 mins",
      servings: "12",
      difficulty: "Easy",
      ingredients: ["2 cups flour","¾ cup sugar","2 tsp baking powder","½ tsp salt","1 cup milk","1/3 cup oil","1 egg","1 cup blueberries"],
      steps: ["Preheat oven to 180°C.","Mix dry ingredients.","Mix wet ingredients and combine.","Fold in blueberries.","Spoon into muffin tins and bake 25 mins."],
      tip: "Toss berries in flour to prevent sinking."
    },
    {
      name: "Chocolate Chip Muffins",
      image: "assets/images/muffin2.jpg",
      prepTime: "15 mins",
      cookTime: "25 mins",
      servings: "12",
      difficulty: "Easy",
      ingredients: ["2 cups flour","¾ cup sugar","2 tsp baking powder","½ tsp salt","1 cup milk","1/3 cup oil","1 egg","1 cup chocolate chips"],
      steps: ["Preheat oven to 180°C.","Mix dry ingredients.","Combine wet ingredients.","Fold in chocolate chips.","Bake 25 mins."],
      tip: "Do not overmix to keep muffins fluffy."
    },
    {
      name: "Banana Muffins",
      image: "assets/images/muffin3.jpg",
      prepTime: "15 mins",
      cookTime: "25 mins",
      servings: "12",
      difficulty: "Easy",
      ingredients: ["2 cups flour","¾ cup sugar","2 tsp baking powder","½ tsp salt","2 ripe bananas","1/3 cup oil","1 egg"],
      steps: ["Preheat oven to 180°C.","Mix dry ingredients.","Mash bananas and combine with wet ingredients.","Fold together.","Bake 25 mins."],
      tip: "Use very ripe bananas for best sweetness."
    },
    {
      name: "Lemon Poppy Seed Muffins",
      image: "assets/images/muffin4.jpg",
      prepTime: "15 mins",
      cookTime: "25 mins",
      servings: "12",
      difficulty: "Medium",
      ingredients: ["2 cups flour","¾ cup sugar","2 tsp baking powder","½ tsp salt","1/3 cup oil","1 cup milk","1 egg","2 tbsp poppy seeds","Zest of 1 lemon"],
      steps: ["Preheat oven to 180°C.","Mix dry ingredients.","Combine wet ingredients.","Fold in poppy seeds and lemon zest.","Bake 25 mins."],
      tip: "Add a simple glaze on top for extra flavor."
    },
    {
      name: "Pumpkin Muffins",
      image: "assets/images/muffin5.jpg",
      prepTime: "20 mins",
      cookTime: "25 mins",
      servings: "12",
      difficulty: "Medium",
      ingredients: ["2 cups flour","¾ cup sugar","2 tsp baking powder","½ tsp salt","½ cup pumpkin puree","1/3 cup oil","1 egg","1 tsp cinnamon"],
      steps: ["Preheat oven to 180°C.","Mix dry ingredients.","Combine wet ingredients and pumpkin puree.","Fold together.","Bake 25 mins."],
      tip: "Add chopped nuts for crunch."
    }
  ]
};
recipes.cookies = [
  {
    name: "Classic Chocolate Chip Cookies",
    image: "assets/images/cookie1.jpg",
    prepTime: "15 mins",
    cookTime: "12 mins",
    servings: "24",
    difficulty: "Easy",
    ingredients: ["2 ¼ cups flour","1 tsp baking soda","1 tsp salt","1 cup butter","¾ cup sugar","¾ cup brown sugar","2 eggs","2 tsp vanilla","2 cups chocolate chips"],
    steps: ["Preheat oven to 175°C.","Mix dry ingredients.","Cream butter and sugars, add eggs and vanilla.","Combine with dry mixture.","Fold in chocolate chips.","Bake 12 mins."],
    tip: "Chill dough for thicker cookies."
  },
  {
    name: "Oatmeal Raisin Cookies",
    image: "assets/images/cookie2.jpg",
    prepTime: "15 mins",
    cookTime: "12 mins",
    servings: "24",
    difficulty: "Medium",
    ingredients: ["1 ½ cups flour","1 tsp baking soda","1 tsp cinnamon","½ tsp salt","1 cup butter","1 cup sugar","2 eggs","3 cups oats","1 cup raisins"],
    steps: ["Preheat oven to 175°C.","Mix dry ingredients.","Cream butter and sugar, add eggs.","Combine with dry mixture.","Fold in oats and raisins.","Bake 12 mins."],
    tip: "Soak raisins in warm water for plump texture."
  },
  {
    name: "Peanut Butter Cookies",
    image: "assets/images/cookie3.jpg",
    prepTime: "10 mins",
    cookTime: "12 mins",
    servings: "24",
    difficulty: "Easy",
    ingredients: ["1 ½ cups peanut butter","1 cup sugar","1 egg","1 tsp baking soda"],
    steps: ["Preheat oven to 175°C.","Mix all ingredients.","Shape into balls and flatten with fork.","Bake 12 mins."],
    tip: "Use creamy peanut butter for soft cookies."
  },
  {
    name: "Double Chocolate Cookies",
    image: "assets/images/cookie4.jpg",
    prepTime: "15 mins",
    cookTime: "12 mins",
    servings: "24",
    difficulty: "Medium",
    ingredients: ["2 cups flour","¾ cup cocoa powder","1 tsp baking soda","½ tsp salt","1 cup butter","1 cup sugar","2 eggs","1 tsp vanilla","1 cup chocolate chips"],
    steps: ["Preheat oven to 175°C.","Mix dry ingredients.","Cream butter and sugar, add eggs and vanilla.","Combine with dry mixture.","Fold in chocolate chips.","Bake 12 mins."],
    tip: "Don’t overbake; keep chewy inside."
  },
  {
    name: "Sugar Cookies",
    image: "assets/images/cookie5.jpg",
    prepTime: "15 mins",
    cookTime: "12 mins",
    servings: "24",
    difficulty: "Easy",
    ingredients: ["2 ¾ cups flour","1 tsp baking soda","½ tsp baking powder","1 cup butter","1 ½ cups sugar","1 egg","1 tsp vanilla"],
    steps: ["Preheat oven to 175°C.","Cream butter and sugar, add egg and vanilla.","Mix dry ingredients, combine.","Shape and bake 12 mins."],
    tip: "Chill dough for easy rolling and cutting shapes."
  }
];
recipes.brownies = [
  {
    name: "Classic Fudgy Brownies",
    image: "assets/images/brownie1.jpg",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: "16",
    difficulty: "Medium",
    ingredients: ["1/2 cup butter","1 cup sugar","2 eggs","1 tsp vanilla","1/3 cup cocoa powder","1/2 cup flour","1/4 tsp salt"],
    steps: ["Preheat oven to 175°C.","Melt butter, mix in sugar, eggs, vanilla.","Add cocoa, flour, salt.","Pour into pan and bake 25 mins."],
    tip: "Do not overbake; fudgy brownies need slight jiggle."
  },
  {
    name: "Walnut Brownies",
    image: "assets/images/brownie2.jpg",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: "16",
    difficulty: "Medium",
    ingredients: ["1/2 cup butter","1 cup sugar","2 eggs","1 tsp vanilla","1/3 cup cocoa powder","1/2 cup flour","1/4 tsp salt","1/2 cup chopped walnuts"],
    steps: ["Preheat oven to 175°C.","Melt butter, mix in sugar, eggs, vanilla.","Add cocoa, flour, salt, walnuts.","Bake 25 mins."],
    tip: "Toast walnuts for enhanced flavor."
  },
  {
    name: "Cheesecake Swirl Brownies",
    image: "assets/images/brownie3.jpg",
    prepTime: "20 mins",
    cookTime: "30 mins",
    servings: "16",
    difficulty: "Medium",
    ingredients: ["1/2 cup butter","1 cup sugar","2 eggs","1 tsp vanilla","1/3 cup cocoa powder","1/2 cup flour","1/4 tsp salt","½ cup cream cheese","2 tbsp sugar","1 egg"],
    steps: ["Preheat oven to 175°C.","Prepare brownie batter.","Mix cream cheese, sugar, egg for swirl.","Layer brownies and swirl cheesecake mixture.","Bake 30 mins."],
    tip: "Swirl with knife for marbled effect."
  },
  {
    name: "Peanut Butter Brownies",
    image: "assets/images/brownie4.jpg",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: "16",
    difficulty: "Medium",
    ingredients: ["1/2 cup butter","1 cup sugar","2 eggs","1 tsp vanilla","1/3 cup cocoa powder","1/2 cup flour","1/4 tsp salt","1/2 cup peanut butter"],
    steps: ["Preheat oven to 175°C.","Mix brownie batter.","Drop peanut butter and swirl.","Bake 25 mins."],
    tip: "Use creamy peanut butter for smooth swirls."
  },
  {
    name: "Blondies",
    image: "assets/images/brownie5.jpg",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: "16",
    difficulty: "Easy",
    ingredients: ["1/2 cup butter","1 cup brown sugar","2 eggs","1 tsp vanilla","1 cup flour","1/4 tsp salt","1/2 cup white chocolate chips"],
    steps: ["Preheat oven to 175°C.","Cream butter and sugar, add eggs, vanilla.","Fold in flour and salt.","Add chocolate chips.","Bake 25 mins."],
    tip: "Do not overmix to keep chewy texture."
  }
];
recipes.donuts = [
  {
    name: "Classic Glazed Donuts",
    image: "assets/images/donut1.jpg",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: "12",
    difficulty: "Medium",
    ingredients: ["2 ½ cups flour","1/2 cup sugar","2 tsp baking powder","1/2 tsp salt","1/2 cup milk","2 eggs","1/4 cup butter","Oil for frying","1 cup glaze sugar"],
    steps: ["Mix dry ingredients.","Add wet ingredients and knead dough.","Roll and cut donuts.","Fry until golden.","Dip in glaze."],
    tip: "Glaze while warm for best coating."
  },
  {
    name: "Chocolate Donuts",
    image: "assets/images/donut2.jpg",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: "12",
    difficulty: "Medium",
    ingredients: ["2 ½ cups flour","1/2 cup sugar","2 tsp baking powder","1/2 tsp salt","1/3 cup cocoa powder","1/2 cup milk","2 eggs","1/4 cup butter","Oil for frying","1 cup glaze sugar"],
    steps: ["Mix dry ingredients with cocoa.","Add wet ingredients, knead dough.","Shape donuts, fry 2-3 mins each side.","Glaze while warm."],
    tip: "Use good cocoa powder for rich chocolate flavor."
  },
  {
    name: "Baked Cinnamon Sugar Donuts",
    image: "assets/images/donut3.jpg",
    prepTime: "15 mins",
    cookTime: "12 mins",
    servings: "12",
    difficulty: "Easy",
    ingredients: ["2 cups flour","1/2 cup sugar","2 tsp baking powder","1/2 tsp salt","1/2 cup milk","1 egg","1/4 cup butter","Cinnamon sugar for coating"],
    steps: ["Preheat oven to 180°C.","Mix dry and wet ingredients to make batter.","Pipe or spoon into donut pan.","Bake 12 mins.","Coat with cinnamon sugar."],
    tip: "Do not overbake; they dry quickly."
  },
  {
    name: "Strawberry Frosted Donuts",
    image: "assets/images/donut4.jpg",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: "12",
    difficulty: "Medium",
    ingredients: ["2 ½ cups flour","1/2 cup sugar","2 tsp baking powder","1/2 tsp salt","1/2 cup milk","2 eggs","1/4 cup butter","Strawberry frosting for topping","Oil for frying"],
    steps: ["Prepare donut dough and shape.","Fry until golden.","Top with strawberry frosting."],
    tip: "Use fresh strawberry puree in frosting for natural color."
  },
  {
    name: "Vanilla Bean Donuts",
    image: "assets/images/donut5.jpg",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: "12",
    difficulty: "Medium",
    ingredients: ["2 ½ cups flour","1/2 cup sugar","2 tsp baking powder","1/2 tsp salt","1/2 cup milk","2 eggs","1/4 cup butter","1 tsp vanilla bean paste","Oil for frying"],
    steps: ["Prepare dough with vanilla bean paste.","Shape and fry donuts.","Optional: glaze with vanilla sugar."],
    tip: "Vanilla paste gives better aroma than extract."
  }
];
