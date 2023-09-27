import { useState } from "react";
import Nav from "./Navigation/Nav";
import Contact from "./Contact/Contact";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import SideBar from "./SideBar/SideBar";
import products from "./db/data";
import Card from "./components/Card";
import "./index.css";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [enteredSearchInput, setEnteredSearchInput] = useState("");

  const handleInputChange = (event) => {
    setEnteredSearchInput(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLowerCase().indexOf(enteredSearchInput.toLowerCase()) !==
      -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleButtonClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = (products, selected, searchInput) => {
    let filteredProducts = products;

    if (searchInput) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, group, newPrice, title }) =>
          category === selected ||
          color === selected ||
          group === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const result = filteredData(products, selectedCategory, enteredSearchInput);
  return (
    <>
      <div>
        <Nav
          enteredSearchInput={enteredSearchInput}
          handleInputChange={handleInputChange}
        />
        <SideBar handleChange={handleChange} />
        <Recommended handleButtonClick={handleButtonClick} />
        <Products result={result} />
      </div>
    </>
  );
};

export default Main;
