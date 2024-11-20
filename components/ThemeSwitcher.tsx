'use client';
import React, { useState, useEffect } from 'react';

const ThemeSwitcher: React.FC = () => {
    const [theme, setTheme] = useState<string>('light');

    useEffect(() => {
        // Перевірка, чи виконується код на стороні клієнта
        if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.className = savedTheme;
        }
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

        if (typeof window !== 'undefined') {
            document.body.className = newTheme;
            localStorage.setItem('theme', newTheme); // Зберігаємо тему в localStorage
        }
    };

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'}
        </button>
    );
};

export default ThemeSwitcher;
