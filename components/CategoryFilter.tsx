import { useState } from "react";

type CategoryFilterProps = {
    onCategoryChange: (category: string) => void;
};

const CategoryFilter = ({ onCategoryChange }: CategoryFilterProps) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const category = e.target.value;
        setSelectedCategory(category);
        onCategoryChange(category);
    };

    return (
        <div>
            <label htmlFor="category">Filter by Category:</label>
            <select
                id="category"
                value={selectedCategory}
                onChange={handleChange}
            >
                <option value="">All</option>
                <option value="Beef">Beef</option>
                <option value="Chicken">Chicken</option>
                <option value="Dessert">Dessert</option>
                <option value="Lamb">Lamb</option>
                <option value="Pasta">Pasta</option>
                <option value="Pork">Pork</option>
                <option value="Seafood">Seafood</option>
                <option value="Vegetarian">Vegetarian</option>
            </select>
        </div>
    );
};

export { CategoryFilter };

