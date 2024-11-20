import { useState, useCallback } from "react";
import _ from "lodash";

type Props = {
  onSearch: (query: string) => void; // Функція для виконання пошуку
};

const MealSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState<string>(""); // Стан для тексту пошуку

  // Дебаунс-функція: викликає `onSearch` через 500 мс після зупинки вводу
  const debouncedSearch = useCallback(
    _.debounce((query: string) => {
      onSearch(query);
    }, 500), // Затримка в 500 мс
    [onSearch]
);

  // Оновлення стану і виклик debounce
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value); // Оновлюємо стан
    debouncedSearch(value); // Викликаємо debounce-функцію
  };

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default MealSearch;

