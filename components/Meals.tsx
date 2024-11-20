'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "./Pagination";
import { CategoryFilter } from "@/components/CategoryFilter";
import { useStore } from "@/store";

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
  }[];
};

const Meals = ({ meals }: Props) => {
  const { selectedMeals, setSelectedMeals } = useStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredMeals, setFilteredMeals] = useState(meals);
  const itemsPerPage = 10;

  useEffect(() => {
    setFilteredMeals(meals);
  }, [meals]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleMeals = filteredMeals.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryFilter = (category: string) => {
    if (category === "") {
      setFilteredMeals(meals);
    } else {
      setFilteredMeals(meals.filter((meal) => meal.strCategory === category));
    }
  };

  const handleMealSelection = (mealId: string) => {
    setSelectedMeals(mealId);
  };

  return (
    <div className="page__content meals">
      <CategoryFilter onCategoryChange={handleCategoryFilter} />
      <ul className="meals__list">
        {visibleMeals.map((meal) => (
          <li key={meal.idMeal}>
            <h2>
              <Link href={`/meals/${meal.idMeal}`}>{meal.strMeal}</Link>
            </h2>
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={100}
              height={100}
              loading="lazy"
            />
            <h3>Category: {meal.strCategory}</h3>
            <p>Area: {meal.strArea}</p>
            <button onClick={() => handleMealSelection(meal.idMeal)}>
              {selectedMeals.includes(meal.idMeal) ? "Deselect" : "Select"}
            </button>
          </li>
        ))}
      </ul>
      <Pagination
        totalPages={Math.ceil(filteredMeals.length / itemsPerPage)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export { Meals };
