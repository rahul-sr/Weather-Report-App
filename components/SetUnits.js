// SetUnits Component
import React from "react";

const SetUnits = ({ value, onSet }) => {
  return (
    <div className="set-units">
      <label>Units</label>
      <select
        onChange={onSet}
        value={value}
      >
        <option>Celsius</option>
        <option>Fahrenheit</option>
      </select>
    </div>
  );
};

export default SetUnits;
