import BestItemCoffee from "../bestItemCoffee/BestItemCoffee";
import "./ourBest.scss";
import solimo from "../../resources/image/img/solimo.png";
import presto from "../../resources/image/img/presto.png";
import aromisto from "../../resources/image/img/aromisto.png";

const OurBest = () => {
  return (
    <div className="ourbest">
      <div className="container">
        <h2 className="ourbest__title">Our best</h2>
        <div className="ourbest__items">
          <BestItemCoffee
            image={solimo}
            title="Solimo Coffee Beans 2 kg"
            price="10.73$"
          />
          <BestItemCoffee
            image={presto}
            title="Presto Coffee Beans 1 kg"
            price="15.99$"
          />
          <BestItemCoffee
            image={aromisto}
            title="AROMISTICO Coffee 1 kg"
            price="6.99$"
          />
        </div>
      </div>
    </div>
  );
};

export default OurBest;
