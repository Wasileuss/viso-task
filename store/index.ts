'use client'

import { getAllMeals, getMealsBySearch, getMealsByCategory } from "@/services/getMeals";
import { create } from "zustand";

// Тип для страв
type Meal = {
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
  };
  
  type UseMeals = {
    meals: Meal[];
    selectedMeals: string[]; // Стан для збереження вибраних рецептів
    loading: boolean;
    getAllMeals: () => Promise<void>;
    getMealsBySearch: (search: string) => Promise<void>;
    setSelectedMeals: (mealId: string) => void; // Додаємо метод для вибору рецептів
  };

export const useStore = create<UseMeals>()((set) => ({
    meals: [],  // Початкове значення страв
    selectedMeals: JSON.parse(localStorage.getItem("selectedMeals") || "[]"),
    loading: false,  // Початковий стан завантаження

    getAllMeals: async () => {
        set({ loading: true });
        try {
            const meals = await getAllMeals();  // Отримуємо всі страви
            set({ meals, loading: false });
        } catch (error) {
            console.error("Failed to fetch all meals:", error);
            set({ meals: [], loading: false });
        }
    },

    getMealsBySearch: async (search: string) => {
        set({ loading: true });
        try {
            const meals = await getMealsBySearch(search);  // Пошук за назвою
            set({ meals, loading: false });
        } catch (error) {
            console.error("Failed to search meals:", error);
            set({ meals: [], loading: false });
        }
    },

    // Функція для фільтрації страв за категорією
    getMealsByCategory: async (category: string) => {
        set({ loading: true });
        try {
            const meals = await getMealsByCategory(category);  // Викликаємо функцію для фільтрації страв за категорією
            set({ meals: meals.meals, loading: false });  // Створення списку страв
        } catch (error) {
            console.error("Failed to fetch meals by category:", error);
            set({ meals: [], loading: false });
        }
    },

    setSelectedMeals: (mealId: string) => {
        set((state) => {
          const updatedSelectedMeals = state.selectedMeals.includes(mealId)
            ? state.selectedMeals.filter((id) => id !== mealId)
            : [...state.selectedMeals, mealId];
    
          // Зберігаємо вибрані рецепти в localStorage
          localStorage.setItem("selectedMeals", JSON.stringify(updatedSelectedMeals));
    
          return { selectedMeals: updatedSelectedMeals };
        });
      },
}));

