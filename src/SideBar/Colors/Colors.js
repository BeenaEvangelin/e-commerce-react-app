import React from "react";
import "./Colors.css";
import { IoMdColorPalette } from "react-icons/io";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div className="color-container">
        <h2 className="sidebar-title color-title">
          Colors
          <IoMdColorPalette className="color-icon" />
        </h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className=" checkmark all"></span>
          <h3>All</h3>
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
        <Input
          handleChange={handleChange}
          value="yellow"
          title="Yellow"
          name="test1"
          color="yellow"
        />
        <Input
          handleChange={handleChange}
          value="violet"
          title="Violet"
          name="test1"
          color="violet"
        />
        <Input
          handleChange={handleChange}
          value="pink"
          title="Pink"
          name="test1"
          color="pink"
        />
        <Input
          handleChange={handleChange}
          value="orange"
          title="Orange"
          name="test1"
          color="orange"
        />
        <Input
          handleChange={handleChange}
          value="brown"
          title="Brown"
          name="test1"
          color="brown"
        />
        <Input
          handleChange={handleChange}
          value="grey"
          title="Grey"
          name="test1"
          color="grey"
        />
        <Input
          handleChange={handleChange}
          value="gold"
          title="Gold"
          name="test1"
          color="gold"
        />
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          <h3>White</h3>
        </label>
      </div>
    </>
  );
};

export default Colors;
