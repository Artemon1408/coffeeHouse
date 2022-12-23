import AppMenu from "../appMenu/AppMenu";
import "./pleasureHeader.scss";
import logoWhite from "../../resources/image/logo/logo.png";

const PleasureHeader = () => {
  return (
    <div className="pleasureHeader">
      <div className="container">
        <AppMenu
          logo={logoWhite}
          textColor={" colorW"}
          menuPosition={" menu_header"}
        />
        <h2 className="pleasureHeader__title">For your pleasure</h2>
      </div>
    </div>
  );
};

export default PleasureHeader;
