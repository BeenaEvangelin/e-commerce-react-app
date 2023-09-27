import "./Price.css";
import { GiTakeMyMoney } from "react-icons/gi";
import Input from "../../components/Input";
const Price = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title price-title">
          Price
          <GiTakeMyMoney className="price-icon" />
        </h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>
          <h3>All</h3>
        </label>
        <Input
          handleChange={handleChange}
          value={500}
          title="Below 500"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={1000}
          title="Rs.500 - 1000"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={5000}
          title="Rs.1000 - Rs.5000"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={10000}
          title="Rs.5000 - Rs.10000"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={20000}
          title="Rs.10000 - Rs.20000"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={40000}
          title="Rs.20000 - Rs.40000"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={50000}
          title="Rs.40000 - Rs.50000"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={80000}
          title="Rs.50000 - Rs.80000"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={100000}
          title="Rs.80000 - Rs.100000"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={120000}
          title="Rs.100000 - Rs.120000"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={150000}
          title="Above Rs.120000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
