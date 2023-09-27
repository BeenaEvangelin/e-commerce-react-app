import React from "react";
import "./Recommended.css";
import Button from "../components/Button";
const Recommended = ({ handleButtonClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-btns">
          <Button
            onClickHandler={handleButtonClick}
            value=""
            title="All Products"
          />

          <Button onClickHandler={handleButtonClick} value="Men" title="Men" />
          <Button
            onClickHandler={handleButtonClick}
            value="Women"
            title="Women"
          />
          <Button
            onClickHandler={handleButtonClick}
            value="Kids"
            title="Kids"
          />
          <Button
            onClickHandler={handleButtonClick}
            value="Electronics"
            title="Electronics"
          />
          <Button
            onClickHandler={handleButtonClick}
            value="Furniture"
            title="Furniture"
          />
          <Button
            onClickHandler={handleButtonClick}
            value="Other Accessories"
            title="Other Accessories"
          />
        </div>
      </div>
    </>
  );
};

export default Recommended;
