type Props = {
  meals: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngradient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    // Додаємо більше інгредієнтів при необхідності
  }[];
  selectedMeals: string[]; // Масив вибраних рецептів
};

const SelectedRecipes = ({ meals, selectedMeals }: Props) => {
  // Функція для об'єднання інгредієнтів з усіх вибраних рецептів
  const getIngredients = () => {
    const ingredients = new Set<string>(); // Використовуємо Set для унікальних інгредієнтів
    selectedMeals.forEach((mealId) => {
      const meal = meals.find((meal) => meal.idMeal === mealId);
      if (meal) {
        // Додаємо інгредієнти для поточного рецепту
        for (let i = 1; i <= 4; i++) {
          const ingredient = meal[`strIngredient${i}` as keyof typeof meal];
          if (ingredient) {
            ingredients.add(ingredient);
          }
        }
      }
      console.log(localStorage.getItem("selectedMeals"));
    });
    return Array.from(ingredients); // Перетворюємо Set в масив
  };

  return (
    <div className="selected-recipes">
      <h2>Selected Recipes</h2>
      <ul>
        {selectedMeals.map((mealId) => {
          const meal = meals.find((meal) => meal.idMeal === mealId);
          if (meal) {
            return (
              <li key={meal.idMeal}>
                <h3>{meal.strMeal}</h3>
                <p>{meal.strInstructions}</p>
              </li>
            );
          }
          return null;
        })}
      </ul>
      <h3>Ingredients:</h3>
      <ul>
        {getIngredients().map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export { SelectedRecipes };
