import React, { useState } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";

const Results = () => {
  const [results, setResults] = useState([]);

  const searchRecipe = (query) => {
    API.search(query)
      .then((res) => {
        console.log(res.data.hits);
        setResults(res.data.hits);
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (query) => {
    searchRecipe(query);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <ul>
        {results &&
          results.map((result) => (
            <div key={result.recipe.source}>
              <strong>{result.recipe.label}</strong> ({result.recipe.yield * 10}
              )
              <ul>
                {result.recipe.ingredientLines.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Results;
