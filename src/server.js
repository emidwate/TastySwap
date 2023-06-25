// This file is for simulating API that we use on our page in order to get the recipes
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    recipe: Model,
  },

  seeds(server) {
    server.create('recipe', {
      id: 1,
      name: 'Scrambled Eggs',
      preparationTime: '10 minutes',
      ingredients: [
        '4 eggs',
        '2 tbsp milk',
        'Salt and pepper to taste',
        '1 tbsp butter',
      ],
      instructions:
        '1. In a bowl, whisk together eggs, milk, salt, and pepper.\n2. Heat butter in a non-stick skillet over medium heat.\n3. Pour the egg mixture into the skillet and let it cook for a few seconds until the edges start to set.\n4. Using a spatula, gently stir and fold the eggs until they are softly set.\n5. Remove from heat and serve hot. Enjoy!',
      image: '../src/assets/scrambled-eggs.jpg',
    });
    server.create('recipe', {
      id: 2,
      name: 'Caprese Salad',
      preparationTime: '15 minutes',
      ingredients: [
        '2 large tomatoes, sliced',
        '8 oz fresh mozzarella cheese, sliced',
        '1 bunch fresh basil leaves',
        '2 tbsp extra-virgin olive oil',
        '2 tbsp balsamic vinegar',
        'Salt and pepper to taste',
      ],
      instructions:
        '1. Arrange tomato slices and mozzarella slices on a serving plate, alternating them.\n2. Tuck fresh basil leaves in between the tomato and mozzarella slices.\n3. Drizzle with olive oil and balsamic vinegar.\n4. Sprinkle with salt and pepper.\n5. Serve immediately. Enjoy!',
      image: '../src/assets/caprese-salad.jpg',
    });
    server.create('recipe', {
      id: 3,
      name: 'Chicken Parmesan',
      preparationTime: '40 minutes',
      ingredients: [
        '2 boneless, skinless chicken breasts',
        '1 cup breadcrumbs',
        '1/2 cup grated Parmesan cheese',
        '1 tsp dried oregano',
        '1/2 tsp garlic powder',
        '1/2 cup all-purpose flour',
        '2 eggs, beaten',
        '1 cup marinara sauce',
        '1 cup shredded mozzarella cheese',
        '2 tbsp olive oil',
        'Salt and pepper to taste',
      ],
      instructions:
        '1. Preheat the oven to 375°F (190°C). Grease a baking dish.\n2. In one bowl, combine breadcrumbs, grated Parmesan cheese, dried oregano, garlic powder, salt, and pepper.\n3. In a separate bowl, place flour. In another bowl, beat the eggs.\n4. Coat each chicken breast in flour, then dip in beaten eggs, and coat with the breadcrumb mixture.\n5. Heat olive oil in a skillet over medium heat. Cook the chicken breasts until golden brown on both sides.\n6. Transfer the chicken to the baking dish. Top each chicken breast with marinara sauce and shredded mozzarella cheese.\n7. Bake for 20-25 minutes, until the cheese is melted and bubbly.\n8. Serve hot with pasta or a side salad. Enjoy!',
      image: '../src/assets/chicken-parmesan.jpg',
    });
    server.create('recipe', {
      id: 4,
      name: 'Spaghetti Bolognese',
      preparationTime: '30 minutes',
      ingredients: [
        '8 oz spaghetti',
        '1 lb ground beef',
        '1 onion, chopped',
        '2 cloves garlic, minced',
        '1 can diced tomatoes',
        '1/4 cup tomato paste',
        '1 tsp dried oregano',
        '1 tsp dried basil',
      ],
      instructions:
        '1. Cook spaghetti according to package instructions. Drain and set aside.\n2. In a large skillet, brown the ground beef over medium heat. Add chopped onion and minced garlic, and cook until onion is translucent.\n3. Stir in diced tomatoes, tomato paste, dried oregano, and dried basil. Reduce heat to low and let simmer for 15 minutes.\n4. Serve the Bolognese sauce over the cooked spaghetti. Enjoy!',
      image: '../src/assets/spaghetti-bolognese.jpg',
    });
    server.create('recipe', {
      id: 5,
      name: 'Chicken Stir-Fry',
      preparationTime: '25 minutes',
      ingredients: [
        '2 boneless, skinless chicken breasts, sliced',
        '1 red bell pepper, sliced',
        '1 green bell pepper, sliced',
        '1 cup broccoli florets',
        '1/2 cup sliced carrots',
        '2 cloves garlic, minced',
        '3 tbsp soy sauce',
        '1 tbsp oyster sauce',
        '1 tsp sesame oil',
        '1/4 tsp red pepper flakes (optional)',
        '2 tbsp vegetable oil',
      ],
      instructions:
        '1. Heat vegetable oil in a large skillet or wok over medium-high heat.\n2. Add sliced chicken and minced garlic to the skillet. Cook until chicken is browned and cooked through.\n3. Add bell peppers, broccoli, carrots, soy sauce, oyster sauce, sesame oil, and red pepper flakes (if desired). Stir-fry for 5-7 minutes, until vegetables are tender-crisp.\n4. Serve the chicken stir-fry over cooked rice or noodles. Enjoy!',
      image: '../src/assets/chicken-stir-fry.jpg',
    });
    server.create('recipe', {
      id: 6,
      name: 'Caprese Salad',
      preparationTime: '10 minutes',
      ingredients: [
        '2 large tomatoes, sliced',
        '8 oz fresh mozzarella cheese, sliced',
        '1 bunch fresh basil leaves',
        '2 tbsp extra-virgin olive oil',
        '2 tbsp balsamic vinegar',
        'Salt and pepper to taste',
      ],
      instructions:
        '1. Arrange tomato slices and mozzarella slices on a serving plate, alternating them.\n2. Tuck fresh basil leaves in between the tomato and mozzarella slices.\n3. Drizzle with olive oil and balsamic vinegar.\n4. Sprinkle with salt and pepper.\n5. Serve immediately. Enjoy!',
      image: '../src/assets/caprese-salad2.jpg',
    });
    server.create('recipe', {
      id: 7,
      name: 'Chicken Parmesan',
      preparationTime: '40 minutes',
      ingredients: [
        '2 boneless, skinless chicken breasts',
        '1 cup breadcrumbs',
        '1/2 cup grated Parmesan cheese',
        '1 tsp dried oregano',
        '1/2 tsp garlic powder',
        '1/2 cup all-purpose flour',
        '2 eggs, beaten',
        '1 cup marinara sauce',
        '1 cup shredded mozzarella cheese',
        '2 tbsp olive oil',
        'Salt and pepper to taste',
      ],
      instructions:
        '1. Preheat the oven to 375°F (190°C). Grease a baking dish.\n2. In one bowl, combine breadcrumbs, grated Parmesan cheese, dried oregano, garlic powder, salt, and pepper.\n3. In a separate bowl, place flour. In another bowl, beat the eggs.\n4. Coat each chicken breast in flour, then dip in beaten eggs, and coat with the breadcrumb mixture.\n5. Heat olive oil in a skillet over medium heat. Cook the chicken breasts until golden brown on both sides.\n6. Transfer the chicken to the baking dish. Top each chicken breast with marinara sauce and shredded mozzarella cheese.\n7. Bake for 20-25 minutes, until the cheese is melted and bubbly.\n8. Serve hot with pasta or a side salad. Enjoy!',
      image: '../src/assets/chicken-parmesan.jpg',
    });
    server.create('recipe', {
      id: 8,
      name: 'Tacos',
      preparationTime: '30 minutes',
      ingredients: [
        '1 lb ground beef',
        '1 packet taco seasoning',
        '12 taco shells',
        '1 cup shredded lettuce',
        '1 cup diced tomatoes',
        '1/2 cup shredded cheddar cheese',
        '1/4 cup chopped onion',
        '1/4 cup chopped fresh cilantro',
        '1/4 cup sour cream',
        '1/4 cup salsa',
      ],
      instructions:
        '1. In a skillet, cook the ground beef over medium heat until browned. Drain any excess fat.\n2. Add the taco seasoning and water (as instructed on the packet) to the skillet. Simmer for 10 minutes, stirring occasionally.\n3. Warm the taco shells in the oven or microwave according to package instructions.\n4. Fill each taco shell with the cooked ground beef.\n5. Top with shredded lettuce, diced tomatoes, shredded cheddar cheese, chopped onion, fresh cilantro, sour cream, and salsa.\n6. Serve immediately. Enjoy!',
      image: '../src/assets/tacos.jpg',
    });
    server.create('recipe', {
      id: 9,
      name: 'Caesar Salad',
      preparationTime: '15 minutes',
      ingredients: [
        '1 head romaine lettuce, torn into bite-sized pieces',
        '1/2 cup grated Parmesan cheese',
        '1/2 cup croutons',
        '1/4 cup Caesar dressing',
        '1 tbsp lemon juice',
        '1 tbsp olive oil',
        '1 clove garlic, minced',
        'Salt and pepper to taste',
      ],
      instructions:
        '1. In a large bowl, combine torn romaine lettuce, grated Parmesan cheese, and croutons.\n2. In a small bowl, whisk together Caesar dressing, lemon juice, olive oil, minced garlic, salt, and pepper.\n3. Pour the dressing over the lettuce mixture and toss until well coated.\n4. Serve immediately. Enjoy!',
      image: '../src/assets/caesar-salad.jpg',
    });
    server.create('recipe', {
      id: 10,
      name: 'Pancakes',
      preparationTime: '20 minutes',
      ingredients: [
        '1 cup all-purpose flour',
        '2 tbsp sugar',
        '1 tsp baking powder',
        '1/2 tsp baking soda',
        '1/4 tsp salt',
        '3/4 cup buttermilk',
        '1/4 cup milk',
        '1 egg',
        '2 tbsp melted butter',
      ],
      instructions:
        '1. In a large bowl, whisk together flour, sugar, baking powder, baking soda, and salt.\n2. In a separate bowl, whisk together buttermilk, milk, egg, and melted butter.\n3. Pour the wet ingredients into the dry ingredients and stir until just combined. The batter may have some lumps.\n4. Heat a griddle or non-stick skillet over medium heat. Lightly grease with butter or cooking spray.\n5. Pour 1/4 cup of batter onto the griddle for each pancake.\n6. Cook until bubbles form on the surface of the pancakes and the edges start to look set, then flip and cook until golden brown on the other side.\n7. Serve hot with maple syrup, fresh fruit, or any desired toppings. Enjoy!',
      image: '../src/assets/pancakes.jpg',
    });
    server.create('recipe', {
      id: 11,
      name: 'Beef Stir-Fry',
      preparationTime: '30 minutes',
      ingredients: [
        '1 lb beef sirloin, thinly sliced',
        '2 tbsp soy sauce',
        '2 tbsp oyster sauce',
        '1 tbsp cornstarch',
        '1 tbsp vegetable oil',
        '2 cloves garlic, minced',
        '1 inch ginger, grated',
        '1 red bell pepper, sliced',
        '1 green bell pepper, sliced',
        '1 cup broccoli florets',
        '1/2 cup sliced carrots',
        '1/2 cup sliced mushrooms',
        'Salt and pepper to taste',
      ],
      instructions:
        '1. In a bowl, combine beef slices, soy sauce, oyster sauce, cornstarch, salt, and pepper. Set aside to marinate for 15 minutes.\n2. Heat vegetable oil in a large skillet or wok over high heat.\n3. Add minced garlic and grated ginger to the skillet. Stir-fry for a minute until fragrant.\n4. Add marinated beef slices to the skillet and stir-fry until browned and cooked through.\n5. Add sliced bell peppers, broccoli florets, sliced carrots, and sliced mushrooms to the skillet. Stir-fry for another 3-4 minutes until the vegetables are tender-crisp.\n6. Serve hot with steamed rice or noodles. Enjoy!',
      image: '../src/assets/beef.jpg',
    });
    server.create('recipe', {
      id: 12,
      name: 'Chicken Noodle Soup',
      preparationTime: '45 minutes',
      ingredients: [
        '2 boneless, skinless chicken breasts, cooked and shredded',
        '4 cups chicken broth',
        '2 cups water',
        '1 cup sliced carrots',
        '1 cup sliced celery',
        '1/2 cup chopped onion',
        '2 cloves garlic, minced',
        '2 cups egg noodles',
        '1 tbsp fresh parsley, chopped',
        '1 tbsp fresh thyme leaves',
        'Salt and pepper to taste',
      ],
      instructions:
        '1. In a large pot, bring chicken broth and water to a boil.\n2. Add sliced carrots, sliced celery, chopped onion, and minced garlic to the pot. Simmer for 10 minutes until the vegetables are tender.\n3. Add egg noodles, shredded chicken, fresh parsley, fresh thyme leaves, salt, and pepper to the pot. Simmer for another 10-12 minutes until the noodles are cooked.\n4. Serve hot. Enjoy!',
      image: '../src/assets/chicken-noodle-soup.jpg',
    });
    server.create('recipe', {
      id: 13,
      name: 'Grilled Cheese Sandwich',
      preparationTime: '10 minutes',
      ingredients: [
        '4 slices bread',
        '4 slices cheddar cheese',
        '2 tbsp butter, softened',
      ],
      instructions:
        '1. Heat a skillet or griddle over medium heat.\n2. Butter one side of each bread slice.\n3. Place two slices of bread, buttered side down, on the skillet.\n4. Top each bread slice with a slice of cheddar cheese.\n5. Place the remaining bread slices on top, buttered side up.\n6. Cook for 2-3 minutes on each side until the bread is golden brown and the cheese is melted.\n7. Serve hot. Enjoy!',
      image: '../src/assets/grilled-cheese.jpg',
    });
    server.create('recipe', {
      id: 14,
      name: 'Pasta Carbonara',
      preparationTime: '20 minutes',
      ingredients: [
        '8 oz spaghetti',
        '4 slices bacon, chopped',
        '2 cloves garlic, minced',
        '2 eggs',
        '1/2 cup grated Parmesan cheese',
        'Salt and pepper to taste',
        '2 tbsp chopped fresh parsley',
      ],
      instructions:
        '1. Cook spaghetti according to package instructions. Drain and set aside.\n2. In a skillet, cook chopped bacon over medium heat until crispy. Remove bacon from the skillet and set aside.\n3. In the same skillet, add minced garlic and sauté for a minute until fragrant.\n4. In a bowl, whisk together eggs, grated Parmesan cheese, salt, and pepper.\n5. Add cooked spaghetti and crispy bacon to the skillet. Stir to combine.\n6. Remove the skillet from heat and quickly pour the egg mixture over the spaghetti. Stir until the eggs are cooked and coated the pasta.\n7. Sprinkle with chopped fresh parsley.\n8. Serve hot. Enjoy!',
      image: '../src/assets/pasta-carbonara.jpg',
    });
    server.create('recipe', {
      id: 16,
      name: 'Spicy Mango Shrimp Skewers',
      preparationTime: '30 minutes',
      ingredients: [
        '1 lb large shrimp, peeled and deveined',
        '2 ripe mangoes, peeled and cubed',
        '1 red bell pepper, seeded and cut into chunks',
        '1 red onion, cut into chunks',
        '2 tablespoons olive oil',
        '2 tablespoons lime juice',
        '2 tablespoons honey',
        '1 tablespoon soy sauce',
        '2 cloves garlic, minced',
        '1 teaspoon grated fresh ginger',
        '1 teaspoon chili powder',
        '1/2 teaspoon cayenne pepper (adjust according to spice preference)',
        'Salt and pepper to taste',
        'Wooden skewers, soaked in water for 30 minutes',
      ],
      instructions:
        '1. In a bowl, whisk together olive oil, lime juice, honey, soy sauce, minced garlic, grated ginger, chili powder, cayenne pepper, salt, and pepper to make the marinade.\n2. Thread the shrimp, cubed mangoes, red bell pepper chunks, and red onion chunks onto the soaked wooden skewers, alternating between ingredients.\n3. Place the skewers in a shallow dish and pour the marinade over them, making sure they are evenly coated. Marinate for at least 15 minutes, or up to 1 hour for more flavor.\n4. Preheat the grill to medium-high heat. Lightly oil the grill grates to prevent sticking.\n5. Place the skewers on the preheated grill and cook for 2-3 minutes per side, or until the shrimp are cooked through and slightly charred.\n6. Remove the skewers from the grill and serve hot. Garnish with additional lime wedges and fresh cilantro, if desired.\n7. Enjoy the spicy and tangy flavors of the mango shrimp skewers!',
      image: '../src/assets/spicy-mango-shrimp.jpg',
    });
  },
  routes() {
    this.namespace = 'api';
    this.loggin = false;
    this.timing = 1200; // Delay of loading recipes on page
    this.get('/recipes', (schema) => {
      return schema.recipes.all();
    });
    this.get('/recipes/:id', (schema, request) => {
      const id = request.params.id;
      return schema.recipes.find(id);
    });
  },
});
