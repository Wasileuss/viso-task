import React from "react";

type PaginationProps = {
  totalPages: number; // Загальна кількість сторінок
  currentPage: number; // Поточна сторінка
  onPageChange: (page: number) => void; // Функція зміни сторінки
};

const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  const generatePages = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 10) {
      // Якщо менше 10 сторінок, показати всі
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Відображення сторінок при великій кількості
      if (currentPage <= 4) {
        // Якщо поточна сторінка до 4, показуємо перші 7 сторінок
        for (let i = 1; i <= 7; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Якщо поточна сторінка близько до кінця, показуємо останні 7 сторінок
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 6; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // В середині пагінації, показуємо сторінки навколо поточної
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 3; i <= currentPage + 3; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  const pages = generatePages();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {/* Кнопка для попередньої сторінки */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>

      {/* Номери сторінок */}
      {pages.map((page, index) =>
        typeof page === "string" ? (
          <span key={index}>{page}</span>
        ) : (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            style={{
              fontWeight: page === currentPage ? "bold" : "normal",
              textDecoration: page === currentPage ? "underline" : "none",
            }}
          >
            {page}
          </button>
        )
      )}

      {/* Кнопка для наступної сторінки */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
