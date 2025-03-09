import React, { useState } from "react";

const JobFilter = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    onSelectCategory(event.target.value);
  };

  return (
    <div className="filter-container">
      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={handleChange}>
        <option value="">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default JobFilter;
