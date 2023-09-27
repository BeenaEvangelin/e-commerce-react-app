import React from "react";

const Input = ({ handleChange, title, name, color, value }) => {
  return (
    <>
      <div>
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            name={name}
            value={value}
          />
          <span className="checkmark" style={{ backgroundColor: color }}></span>
          <h3>{title}</h3>
        </label>
      </div>
    </>
  );
};

export default Input;
