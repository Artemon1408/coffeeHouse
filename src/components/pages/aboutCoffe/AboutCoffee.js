import OurCoffee from "../../ourCoffee/OurCoffee";
import "./aboutCoffee.scss";
import coffeeItem from "../../../resources/image/img/coffeeItem.jpg";
import BlackLogo from "../../../resources/image/logo/BlackLogo.png";
import FooterApp from "../../footerApp/FooterApp";

const AboutCoffeePage = () => {
  return (
    <div className="aboutCoffee">
      <OurCoffee />
      <div className="aboutCoffee__content">
        <div className="aboutCoffee__image">
          <img src={coffeeItem} alt="coffee" />
        </div>
        <div className="aboutCoffee__descr">
          <h2 className="aboutCoffee__descr-title">About it</h2>
          <div className="aboutCoffee__descr-logo">
            <img src={BlackLogo} alt="logo" />
          </div>
          <div className="aboutCoffee__descr-text">
            Country:
            <span lassName="aboutCoffee__descr-text_bold"> Brasil </span>
          </div>
          <div className="aboutCoffee__descr-text">
            Description:
            <span className="aboutCoffee__descr-text_bold">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </div>
          <div className="aboutCoffee__descr-text">
            Price:
            <span className="aboutCoffee__descr-price"> 16.99$ </span>
          </div>
        </div>
      </div>
      <FooterApp />
    </div>
  );
};

export default AboutCoffeePage;
