import "./coffeeItem.scss";
import aromisto from "../../resources/image/img/aromisto.png";

const CoffeeItem = ({ name, country }) => {
  return (
    <li className="coffeeItem">
      <div className="coffeeItem__logo">
        <img src={aromisto} alt="logo" />
      </div>
      <div className="coffeeItem__title">{name}</div>
      <div className="coffeeItem__subtitle">{country}</div>
      <div className="coffeeItem__price">6.99$</div>
    </li>
  );
};

export default CoffeeItem;
