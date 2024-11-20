import Image from "next/image";
import { Metadata } from "next";

type Props = {
    params: {
        id: number;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`);
    const data = await response.json();
    const meal = data.meals ? data.meals[0] : null;

    return {
        title: meal ? meal.strMeal : "Meal not found",
    };
}

export default async function MealPage({ params }: Props) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`);
    const data = await response.json();
    const meal = data.meals ? data.meals[0] : null;

    if (!meal) {
        return <h1>Meal not found</h1>;
    }

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}` as keyof typeof meal];
        const measure = meal[`strMeasure${i}` as keyof typeof meal];

        if (ingredient && measure) {
            ingredients.push({ ingredient, measure });
        }
    }

    return (
        <div className="page__container">
            <h1>{meal.strMeal}</h1>
            <Image src={meal.strMealThumb} alt={meal.strMeal} width={400} height={400} />
            <p>Category: {meal.strCategory}</p>
            <p>Tags: {meal.strTags}</p>
            <a href={meal.strYoutube} target="_blank">Youtube</a>
            <p>Area: {meal.strArea}</p>
            <p>Instructions:</p>
            <p>{meal.strInstructions}</p>
            <p>Ingredients and Measures:</p>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <span>{ingredient.ingredient}:</span> <span>{ingredient.measure}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}


