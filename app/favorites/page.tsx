'use client';

import { useStore } from "@/store"; // Підключаємо Zustand або інший механізм для збереження вибраних рецептів
import { SelectedRecipes } from "@/components/SelectedRecipes"; // Компонент для відображення вибраних рецептів

const SelectedRecipesPage = () => {
  const { meals, selectedMeals } = useStore(); // Отримуємо страви та вибрані рецепти з Zustand

  return (
    <div className="page__container">
      <h1 className="page__title">Selected Recipes</h1>
      {selectedMeals.length > 0 ? (
        <SelectedRecipes meals={meals} selectedMeals={selectedMeals} />
      ) : (
        <p>No recipes selected</p>
      )}
    </div>
  );
};

export default SelectedRecipesPage;
