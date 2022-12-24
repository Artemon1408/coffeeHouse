import { Link } from "react-router-dom";
import "./coffeeItem.scss";
import aromisto from "../../resources/image/img/aromisto.png";

const CoffeeItem = ({ name, country }) => {
  return (
    <Link to="/aboutcoffee" className="coffeeItem">
      <div className="coffeeItem__logo">
        <img src={aromisto} alt="logo" />
      </div>
      <div className="coffeeItem__title">{name}</div>
      <div className="coffeeItem__subtitle">{country}</div>
      <div className="coffeeItem__price">6.99$</div>
    </Link>
  );
};

export default CoffeeItem;
