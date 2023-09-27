import React from "react";
import "./Category.css";
import { TbCategoryFilled } from "react-icons/tb";
import Input from "../../components/Input";
const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">
        Category
        <TbCategoryFilled className="category-icon" />
      </h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>
          <h3>All</h3>
        </label>
        <Input
          handleChange={handleChange}
          value="salwar"
          title="Salwar"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="saree"
          title="Saree"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="suits"
          title="Suits"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="shirts"
          title="Shirts"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="t-shirts"
          title="T-Shirts"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="frock"
          title="Frock"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="lehenga"
          title="Lehenga"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="kids t-shirt"
          title="Kids T-Shirt"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="kids shirt"
          title="Kids Shirt"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="mobile phone"
          title="Mobile Phone"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="air conditioner"
          title="Air Conditioner"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="laptop"
          title="Laptop"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="conference table"
          title="Conference Table"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="desk"
          title="Desk"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="wardrobe"
          title="Wardrode"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="silver chain"
          title="Silver Chain"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="footwear"
          title="Footwear"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="bags"
          title="Bags"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;

/*
function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">
        Category <TbCategoryFilled />
      </h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="footwear"
          title="Footwear"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;*/
