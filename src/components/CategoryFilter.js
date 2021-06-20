
import React from "react";

function CategoryFilter({ categories, category, setCategory }) {
  const categoryButtons = categories.map((element) => {
    const className = element === category ? "selected" : null;
    return (
      <button
        key={element}
        className={className}
        onClick={() => setCategory(element)}
      >
        {element}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;