"use client";
import { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  onCategoryChange,
}: CategoryFilterProps) {
    
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-800 hover:bg-slate-200"
              }`}
            onClick={() => {
              setActiveCategory(category);
              onCategoryChange(category);
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
}
