export const getAllMeals = async () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; // Алфавіт для пошуку
    const requests = alphabet.split("").map((letter) =>
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    );

    try {
        const responses = await Promise.all(requests);
        const data = await Promise.all(responses.map((res) => res.json()));

        // Об'єднуємо результати з усіх запитів
        const meals = data
            .flatMap((item) => item.meals || []) // Розгортаємо масиви
            .filter(Boolean); // Видаляємо `null` значення

        return meals;
    } catch (error) {
        console.error("Failed to fetch meals:", error);
        return [];
    }
};


export const getMealsBySearch = async (search: string) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`); // Пошук страв за назвою
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.meals || []; // Повертаємо масив страв або порожній масив, якщо результатів немає
};


// services/getMeals.ts

export const getMealsByCategory = async (category: string) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    if (!response.ok) {
        throw new Error("Failed to fetch meals by category");
    }
    return response.json();
};

