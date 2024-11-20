'use client';

import { useEffect } from "react";
import { useStore } from "@/store"; // Підключаємо Zustand
import { Meals } from "@/components/Meals";
import MealSearch from "@/components/MealSearch";

export default function MealsPage() {
    const { meals, loading, getAllMeals, getMealsBySearch } = useStore(); // Витягуємо стан і методи з Zustand

    const handleSearch = async (query: string) => {
        console.log("Searching for:", query); // Лог для перевірки

        if (query.trim() === "") {
            // Якщо запит пустий, завантажуємо всі страви
            await getAllMeals();
        } else {
            // Інакше виконуємо пошук
            await getMealsBySearch(query);
        }
    };

    useEffect(() => {
        getAllMeals(); // Завантаження всіх страв при першому рендері
    }, [getAllMeals]);

    return (
        <div className="page__container">
            <h1 className="page__title">Meals</h1>
            <MealSearch onSearch={handleSearch} />
            {loading ? (
                <h3>Loading ...</h3>
            ) : (
                <Meals meals={meals} />
            )}
        </div>
    );
}


