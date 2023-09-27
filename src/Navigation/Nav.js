import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUserAdd, AiOutlineSearch } from "react-icons/ai";
import { TbCircleLetterS } from "react-icons/tb";
import "./Nav.css";

const Nav = ({ handleInputChange, enteredSearchInput }) => {
  return (
    <nav>
      <div className="head-container">
        <h1>Shopsy</h1>
        <TbCircleLetterS className="nav-icons-head" />
      </div>

      <div className="nav-container">
        <AiOutlineSearch className="nav-icons-search" />
        <input
          type="text"
          className="search-input"
          onChange={handleInputChange}
          value={enteredSearchInput}
          placeholder="Search"
        />
      </div>
      <div className="profile-container">
        <BsFillSuitHeartFill className="nav-icons-like" />

        <FaShoppingCart className="nav-icons-cart" />

        <AiOutlineUserAdd className="nav-icons-user" />
      </div>
    </nav>
  );
};

export default Nav;
