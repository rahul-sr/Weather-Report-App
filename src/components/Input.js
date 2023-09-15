// Input Component
import React from "react";
import PropTypes from "prop-types";

const Input = (
  { onLocationInputChange },
  ref
) => {
  const onChangeHandler = () => {
    onLocationInputChange(
      ref.current.value
    );
  };

  return (
    <span className="input-box">
      <span className="label">
        Location
      </span>
      <input
        type="text"
        ref={ref}
        onChange={onChangeHandler}
      />
    </span>
  );
};

Input.propTypes = {
  onLocationInputChange: PropTypes.func,
};
const Location =
  React.forwardRef(Input);

export default Location;
