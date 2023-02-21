import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [lowCarb, setLowCarb] = useState(false);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleLowCarbChange = (e) => {
    setLowCarb(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, lowCarb);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleQueryChange} />
      <label>
        <input
          type="checkbox"
          checked={lowCarb}
          onChange={handleLowCarbChange}
        />
        Low-Carb
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
