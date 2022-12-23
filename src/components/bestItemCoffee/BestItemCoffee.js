import "./bestItemCoffee.scss";

const BestItemCoffee = ({ image, title, price }) => {
  return (
    <div className="coffeeItemBest">
      <div className="coffeeItemBest__logo">
        <img src={image} alt="coffee" />
      </div>
      <div className="coffeeItemBest__title">{title}</div>
      <div className="coffeeItemBest__price">{price}</div>
    </div>
  );
};

export default BestItemCoffee;
