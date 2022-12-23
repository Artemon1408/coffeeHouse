import AppMenu from "../appMenu/AppMenu";
import "./ourCoffee.scss";
import logoWhite from "../../resources/image/logo/logo.png";

const OurCoffee = () => {
  return (
    <div className="ourCoffee">
      <div className="container">
        <AppMenu
          logo={logoWhite}
          textColor={" colorW"}
          menuPosition={" menu_header"}
        />
        <h2 className="ourCoffee__title">Our Coffee</h2>
      </div>
    </div>
  );
};

export default OurCoffee;
