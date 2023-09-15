// SearchResults Component
import React from "react";

const SearchResults = ({
  data,
  selectLocation,
}) => {
  return (
    <div className="search-results">
      {data.map((ele) => {
        return (
          <div
            key={ele.id}
            className="search-option"
          >
            {ele.name}
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
