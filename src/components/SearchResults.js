// SearchResults Component
import React from "react";
import PropTypes from "prop-types";

const SearchResults = ({
  data = [],
  selectLocation,
}) => {
  return (
    <div className="search-results">
      {data.map((ele) => {
        return (
          <div
            key={ele.id}
            className="search-option"
            onClick={() =>
              selectLocation(ele)
            }
          >
            {ele.name}
          </div>
        );
      })}
    </div>
  );
};

SearchResults.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  selectLocation: PropTypes.func,
};

export default SearchResults;
