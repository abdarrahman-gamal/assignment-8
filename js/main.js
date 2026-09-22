var difficultyColors = {
  Easy: "bg-success-subtle text-success",
  Intermediate: "bg-warning-subtle text-warning-emphasis",
  Hard: "bg-danger-subtle text-danger"
};

var categoryColors = {
  Asian: "bg-primary-subtle text-primary",
  Mediterranean: "bg-info-subtle text-info-emphasis",
  Egyptian: "bg-danger-subtle text-danger",
  Chinese: "bg-danger-subtle text-danger",
  American: "bg-secondary-subtle text-secondary"
};

var recipes = [
  {
    name: "Classic Pad Thai",
    description: "Chewy rice noodles flash-fried with juicy shrimp, eggs, and a tangy tamarind punch.",
    image: "img/1.png",
    rating: "4.8",
    reviews: "(445 reviews)",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "2 people",
    difficulty: "Intermediate",
    category: "Asian",
    extendedTime: false,
    ingredients: [
      "200g dried rice noodles",
      "200g raw shrimp, peeled and deveined",
      "2 large eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Handful of fresh bean sprouts",
      "Crushed roasted peanuts",
      "Fresh lime wedges and cilantro"
    ],
    instructions: [
      "Soak the rice noodles in warm water for about 30 minutes until pliable but still slightly firm. Drain thoroughly.",
      "Whisk tamarind paste, fish sauce, and palm sugar in a bowl until the sugar dissolves.",
      "Get a wok smoking hot with a dash of oil. Crack in the eggs, scramble quickly into soft curds, and push aside.",
      "Sear the shrimp until pink on both sides. Drop in the drained noodles and pour the sauce over everything, tossing fast for 2 to 3 minutes.",
      "Fold in the bean sprouts and scrambled eggs right at the end so the sprouts stay crisp.",
      "Plate hot, topped with crushed peanuts and plenty of lime wedges to squeeze over."
    ],
    nutrition: {
      calories: "540 kcal",
      protein: "32g",
      carbs: "62g",
      fat: "16g",
      fiber: "4g",
      sodium: "1120mg"
    },
    tips: [
      "Don't let the noodles sit in water too long—they should soften in the pan with the sauce, not in the bowl.",
      "Keep the heat roaring high; moisture needs to evaporate fast so the noodles don't turn into a clumpy mess.",
      "Tamarind varies wildly by brand; taste your sauce beforehand and adjust the sugar if it puckers your mouth.",
      "Have all bowls chopped and measured next to the stove before you turn on the burner."
    ]
  },
  {
    name: "Pan-Seared Teriyaki Chicken Bowl",
    description: "Crispy-edged chicken thighs coated in a glossy ginger-garlic glaze, served over hot rice.",
    image: "img/2.png",
    rating: "4.7",
    reviews: "(367 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "2 people",
    difficulty: "Easy",
    category: "Asian",
    extendedTime: false,
    ingredients: [
      "400g boneless chicken thighs, cut into bite-sized strips",
      "1/2 cup teriyaki sauce",
      "2 cups warm cooked white rice",
      "1 small head broccoli, cut into florets",
      "1 carrot, cut into matchsticks",
      "1 tablespoon toasted sesame seeds",
      "2 green onions, thinly sliced",
      "1 tablespoon toasted sesame oil"
    ],
    instructions: [
      "Heat sesame oil in a skillet over medium-high. Add chicken pieces and leave untouched for 3 minutes to brown nicely before stirring.",
      "Turn heat to medium-low, pour in teriyaki sauce, and simmer for 5 minutes until it reduces to a sticky glaze.",
      "Steam the broccoli and carrots in a covered basket for 3 to 4 minutes until vibrant green and tender-crisp.",
      "Spoon hot rice into shallow bowls.",
      "Top with the glazed chicken and steamed greens, spooning extra skillet glaze over the rice.",
      "Garnish with sliced scallions and sesame seeds. Serve immediately."
    ],
    nutrition: {
      calories: "540 kcal",
      protein: "42g",
      carbs: "58g",
      fat: "14g",
      fiber: "4g",
      sodium: "1240mg"
    },
    tips: [
      "Chicken thighs have enough fat to stay juicy through the simmering stage—breast meat tends to dry out.",
      "If your sauce is overly sweet, whisk in a teaspoon of grated fresh ginger and a dash of rice vinegar.",
      "Toss shelled edamame into the steamer basket with the carrots to add texture without another pan.",
      "Pack the rice and chicken separately if you're saving this for tomorrow's lunch."
    ]
  },
  {
    name: "Greek Moussaka",
    description: "Layers of roasted eggplant and cinnamon-spiced minced lamb baked beneath a silky béchamel crust.",
    image: "img/3.png",
    rating: "4.8",
    reviews: "(234 reviews)",
    prepTime: "30 min",
    cookTime: "60 min",
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Mediterranean",
    extendedTime: true,
    ingredients: [
      "3 large eggplants, sliced into rounds",
      "500g ground lamb",
      "400g canned crushed tomatoes",
      "1 yellow onion, finely diced",
      "3 cloves garlic, minced",
      "500ml thick béchamel sauce",
      "100g grated parmesan cheese",
      "Ground cinnamon and dried oregano",
      "Extra virgin olive oil"
    ],
    instructions: [
      "Salt the eggplant rounds generously and leave in a colander for 30 minutes to sweat out bitter liquid. Rinse and pat dry with towels.",
      "Brush eggplant slices with olive oil and roast at 200°C (400°F) for 20 minutes until tender and slightly golden.",
      "Brown the lamb with onions and garlic. Stir in tomatoes, cinnamon, oregano, salt, and black pepper. Simmer uncovered for 20 minutes.",
      "Preheat oven to 180°C (350°F).",
      "Layer into an ovenproof dish: half the eggplant, half the meat sauce, remaining eggplant, remaining meat. Pour over béchamel and scatter parmesan.",
      "Bake for 45 minutes until the top turns deep golden brown. Let rest on the counter for 15 minutes before cutting."
    ],
    nutrition: {
      calories: "580 kcal",
      protein: "36g",
      carbs: "32g",
      fat: "32g",
      fiber: "8g",
      sodium: "820mg"
    },
    tips: [
      "Roasting the eggplant instead of deep-frying keeps the dish rich without becoming greasy.",
      "Do not rush to cut it straight out of the oven; letting it settle for 15 minutes prevents neat squares from collapsing.",
      "Ground beef (80/20) works fine if you cannot source ground lamb.",
      "Moussaka tastes noticeably better the next day once the spices meld in the fridge."
    ]
  },
  {
    name: "Authentic Egyptian Koshary",
    description: "Cairo's ultimate street meal: spiced brown lentils, rice, and pasta under a garlicky tomato sauce and crisp onions.",
    image: "img/4.png",
    rating: "4.9",
    reviews: "(512 reviews)",
    prepTime: "25 min",
    cookTime: "45 min",
    servings: "4 people",
    difficulty: "Hard",
    category: "Egyptian",
    extendedTime: true,
    ingredients: [
      "1 cup brown lentils, rinsed",
      "1 cup Egyptian short-grain rice",
      "1 cup ditali or elbow macaroni",
      "2 large yellow onions, sliced paper-thin",
      "2 cups pureed strained tomatoes",
      "4 cloves garlic, crushed",
      "1 can chickpeas, rinsed and drained",
      "1/4 cup white vinegar",
      "Ground cumin, coriander, salt, and vegetable oil"
    ],
    instructions: [
      "Fry the sliced onions in generous oil until dark golden and crispy. Transfer with a slotted spoon to paper towels; reserve the fragrant oil.",
      "Simmer the brown lentils in water until par-cooked, then cook the rice in that same lentil stock using a splash of the reserved onion oil.",
      "Boil the pasta in well-salted water until al dente, drain, and toss with a teaspoon of the onion oil so it doesn't clump.",
      "In a small pot, sauté crushed garlic in onion oil, deglaze with vinegar, add tomato puree, cumin, and simmer for 15 minutes.",
      "Whisk crushed garlic with cumin, white vinegar, a pinch of salt, and warm water to make the table dressing (Dakka).",
      "Build each plate: rice and lentils first, then pasta, warm chickpeas, ladlefuls of tomato sauce, and a mountain of crispy onions."
    ],
    nutrition: {
      calories: "620 kcal",
      protein: "22g",
      carbs: "115g",
      fat: "11g",
      fiber: "14g",
      sodium: "740mg"
    },
    tips: [
      "The oil used to fry the onions is liquid gold—use it to cook the rice and tomato sauce for genuine street-cart flavor.",
      "Slice onions uniformly and toss with a dusting of flour before frying to guarantee they stay crunchy for hours.",
      "Keep both the garlic vinegar (Dakka) and chili oil in little cruets at the table so everyone adjusts their own heat.",
      "Cook the pasta just shy of done; it softens further under the steaming tomato sauce."
    ]
  },
  {
    name: "Classic Smash Burger",
    description: "Ultra-thin, lacy-edged beef patties seared on a cast-iron skillet with molten American cheese.",
    image: "img/5.png",
    rating: "4.6",
    reviews: "(310 reviews)",
    prepTime: "10 min",
    cookTime: "10 min",
    servings: "2 people",
    difficulty: "Easy",
    category: "American",
    extendedTime: false,
    ingredients: [
      "350g ground beef chuck (80/20 blend)",
      "4 slices processed American cheese",
      "2 brioche buns",
      "2 tablespoons unsalted butter",
      "Dill pickle chips",
      "2 tablespoons mayonnaise",
      "1 tablespoon ketchup",
      "Flaky sea salt and coarse black pepper"
    ],
    instructions: [
      "Form the cold beef into four loose balls—do not pack or knead them tightly.",
      "Butter the cut sides of the buns and toast on a dry griddle until deep amber.",
      "Drop the beef onto a screaming hot dry skillet. Using a heavy spatula backed by parchment paper, press paper-thin.",
      "Season heavily with salt and coarse pepper. Cook untouched until the edges turn brown and crispy lace forms (about 2 minutes).",
      "Scrape firmly underneath to keep the crust intact, flip, immediately lay down cheese, and stack two patties together.",
      "Smear sauce on buns, add pickle slices, set down the double patties, and cap off."
    ],
    nutrition: {
      calories: "680 kcal",
      protein: "38g",
      carbs: "42g",
      fat: "44g",
      fiber: "2g",
      sodium: "1080mg"
    },
    tips: [
      "80/20 fat content is mandatory; lean beef will stick, burn, and turn dry without developing those crisp lacy edges.",
      "Smash within the first 20 seconds while the fat is still chilled; once fat melts, pressing just squeezes juices into the pan.",
      "Use heavy stainless steel or cast iron; non-stick coatings cannot handle the searing heat needed for a true smash.",
      "Never press down on the patties after flipping them."
    ]
  },
  {
    name: "Sichuan Kung Pao Chicken",
    description: "Diced chicken stir-fried with fragrant dried chilies, numbing peppercorns, and crisp roasted peanuts.",
    image: "img/6.png",
    rating: "4.8",
    reviews: "(390 reviews)",
    prepTime: "20 min",
    cookTime: "10 min",
    servings: "3 people",
    difficulty: "Intermediate",
    category: "Chinese",
    extendedTime: false,
    ingredients: [
      "400g boneless chicken thigh or breast, cubed",
      "1/2 cup roasted unsalted peanuts",
      "8 to 10 whole dried red chilies, snipped",
      "1 teaspoon Sichuan peppercorns",
      "3 green onions, cut into 1-inch lengths",
      "2 tablespoons light soy sauce",
      "1 tablespoon Chinkiang black vinegar",
      "1 tablespoon cornstarch",
      "2 tablespoons neutral cooking oil"
    ],
    instructions: [
      "Toss the cubed chicken with 1 tablespoon soy sauce and half the cornstarch. Let rest for 15 minutes.",
      "Whisk remaining soy sauce, black vinegar, a teaspoon of sugar, remaining cornstarch, and 2 tablespoons of water for your stir-fry sauce.",
      "Heat oil in a wok over medium-low. Add snipped chilies and Sichuan peppercorns; fry gently until fragrant and darkened, without burning.",
      "Crank the heat to high. Drop in the chicken and toss rapidly until the outside turns opaque and lightly browned.",
      "Pour in the sauce mixture and stir constantly as it bubbles and clings to the chicken.",
      "Toss in peanuts and green onions right before cutting the heat. Serve steaming hot alongside rice."
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "41g",
      carbs: "24g",
      fat: "29g",
      fiber: "5g",
      sodium: "960mg"
    },
    tips: [
      "Keep heat moderate when toasting chilies and peppercorns—burnt chilies taste bitter and overpower the dish.",
      "Peanuts go in at the very final second so they don't steam and lose their crunch.",
      "Mix the sauce thoroughly before adding; cornstarch settles quickly at the bottom of the prep bowl.",
      "Thigh meat holds up better to high wok heat, but breast works if diced evenly."
    ]
  }
];

var recipeImage = document.querySelector('.recipe-image');
var ratingAverage = document.querySelector('.recipe-image-side .rounded-pill .fw-semibold');
var ratingQuantity = document.querySelector('.recipe-image-side .rounded-pill .text-muted');

var prepTimeDisplay = document.querySelector('.recipe-image-side .row.text-center .col-4:nth-child(1) .fw-bold');
var cookTimeDisplay = document.querySelector('.recipe-image-side .row.text-center .col-4:nth-child(2) .fw-bold');
var servingsDisplay = document.querySelector('.recipe-image-side .row.text-center .col-4:nth-child(3) .fw-bold');

var difficultyBadge = document.getElementById('difficulty-badge');
var categoryBadge = document.getElementById('category-badge');
var recipeName = document.getElementById('recipe-name');
var recipeDescription = document.getElementById('recipe-description');
var timeWarningContainer = document.getElementById('time-warning-container');

var ingredientsList = document.getElementById('ingredients-list');
var instructionsList = document.getElementById('instructions-list');

var caloriesValue = document.getElementById('calories-value');
var proteinValue = document.getElementById('protein-value');
var carbsValue = document.getElementById('carbs-value');
var fatValue = document.getElementById('fat-value');
var fiberValue = document.getElementById('fiber-value');
var sodiumValue = document.getElementById('sodium-value');

var tipsList = document.getElementById('tips-list');
var tryAnotherBtn = document.getElementById('try-another-btn');

var currentRecipeIndex = 0;

function applyBadgeStyle(badgeElement, text, colorsDictionary, fallbackColor) {
  badgeElement.textContent = text;
  var colorClass = colorsDictionary[text] || fallbackColor;
  badgeElement.className = "px-3 py-1 rounded-pill small fw-semibold " + colorClass;
}

function updateRecipeDisplay(index) {
  var currentRecipe = recipes[index];

  recipeImage.src = currentRecipe.image;
  recipeImage.alt = currentRecipe.name;
  ratingAverage.textContent = currentRecipe.rating;
  ratingQuantity.textContent = currentRecipe.reviews;

  prepTimeDisplay.textContent = currentRecipe.prepTime;
  cookTimeDisplay.textContent = currentRecipe.cookTime;
  servingsDisplay.textContent = currentRecipe.servings;

  applyBadgeStyle(difficultyBadge, currentRecipe.difficulty, difficultyColors, "bg-success-subtle text-success");
  applyBadgeStyle(categoryBadge, currentRecipe.category, categoryColors, "bg-primary-subtle text-primary");

  recipeName.textContent = currentRecipe.name;
  recipeDescription.textContent = currentRecipe.description;

  if (currentRecipe.extendedTime) {
    timeWarningContainer.innerHTML = `
      <div id="time-warning" class="alert-custom border-0 border-start border-4 rounded-3 p-3 mb-4">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-triangle-exclamation fs-5 text-alert-icon flex-shrink-0"></i>
          <div>
            <p class="fw-semibold text-alert-title mb-1">
              Needs a Little Extra Time
            </p>
            <p class="text-alert-desc small mb-0">
              This recipe takes over 45 minutes to pull together. Best started before you're starving.
            </p>
          </div>
        </div>
      </div>
    `;
  } else {
    timeWarningContainer.innerHTML = "";
  }

  ingredientsList.innerHTML = currentRecipe.ingredients.map(function(item, idx) {
    return `
      <li class="d-flex align-items-center gap-3">
        <span class="ingredient-number rounded-circle text-white d-flex align-items-center justify-content-center fw-bold flex-shrink-0">${idx + 1}</span>
        <span class="text-secondary">${item}</span>
      </li>
    `;
  }).join('');

  instructionsList.innerHTML = currentRecipe.instructions.map(function(step, idx) {
    return `
      <div class="d-flex align-items-start gap-3">
        <div class="step-number w-12 h-12 rounded-4 text-white fs-5 fw-bold d-flex align-items-center justify-content-center flex-shrink-0">
          ${idx + 1}
        </div>
        <p class="text-secondary pt-2 mb-0 flex-grow-1">
          ${step}
        </p>
      </div>
    `;
  }).join('');

  caloriesValue.textContent = currentRecipe.nutrition.calories;
  proteinValue.textContent = currentRecipe.nutrition.protein;
  carbsValue.textContent = currentRecipe.nutrition.carbs;
  fatValue.textContent = currentRecipe.nutrition.fat;
  fiberValue.textContent = currentRecipe.nutrition.fiber;
  sodiumValue.textContent = currentRecipe.nutrition.sodium;

  tipsList.innerHTML = currentRecipe.tips.map(function(tip) {
    return `
      <div class="tip-card p-3 p-md-4 bg-warning-subtle border-0 border-start border-4 border-warning rounded-4 d-flex align-items-start gap-3">
        <i class="fa-solid fa-circle-check text-warning fs-5 mt-1 flex-shrink-0"></i>
        <p class="text-secondary mb-0">${tip}</p>
      </div>
    `;
  }).join('');
}

// استدعاء التهيئة لتشغيل أول وصفة فور التحميل
updateRecipeDisplay(currentRecipeIndex);

tryAnotherBtn.addEventListener('click', function() {
  currentRecipeIndex = (currentRecipeIndex + 1) % recipes.length;
  updateRecipeDisplay(currentRecipeIndex);
});