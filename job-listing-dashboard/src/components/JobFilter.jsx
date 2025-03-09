// src/components/JobFilter.jsx
import React from "react";

const JobFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default JobFilter;
