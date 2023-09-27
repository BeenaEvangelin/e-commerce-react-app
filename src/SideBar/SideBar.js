import React from "react";
import "./SideBar.css";
import Colors from "./Colors/Colors";
import Category from "./Category/Category";
import Price from "./Price/Price";
import { VscListFilter } from "react-icons/vsc";

const SideBar = ({ handleChange }) => {
  return (
    <section className="sidebar">
      <h5 className="sidebar-header">
        Filter By <VscListFilter />
      </h5>
      <Category handleChange={handleChange} />
      <Colors handleChange={handleChange} />
      <Price handleChange={handleChange} />
    </section>
  );
};

export default SideBar;
