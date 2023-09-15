// SetUnits Component
import React from "react";
import PropTypes from "prop-types";

const SetUnits = ({ value, onSet }) => {
  return (
    <div className="set-units">
      <label>Units</label>
      <select
        onChange={onSet}
        value={value}
      >
        <option value="C">
          Celsius
        </option>
        <option value="F">
          Fahrenheit
        </option>
      </select>
    </div>
  );
};

SetUnits.propTypes = {
  value: PropTypes.string,
  onSet: PropTypes.func,
};

export default SetUnits;
