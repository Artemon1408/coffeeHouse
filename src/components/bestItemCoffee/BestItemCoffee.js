import { Link } from "react-router-dom";
import "./bestItemCoffee.scss";

const BestItemCoffee = ({ image, title, price }) => {
  return (
    <Link to="/aboutcoffee" className="coffeeItemBest">
      <div className="coffeeItemBest__logo">
        <img src={image} alt="coffee" />
      </div>
      <div className="coffeeItemBest__title">{title}</div>
      <div className="coffeeItemBest__price">{price}</div>
    </Link>
  );
};

export default BestItemCoffee;
