import "./appPromo.scss";
import AppMenu from "../appMenu/AppMenu";
import promoLogo from "../../resources/image/logo/promoLogo.png";
import logoWhite from "../../resources/image/logo/logo.png";
const AppPromo = () => {
  return (
    <div className="promo">
      <div className="container">
        <AppMenu
          logo={logoWhite}
          textColor={" colorW"}
          menuPosition={" menu_header"}
        />
        <div className="promo__cont">
          <h1 className="promo__cont-title">
            Everything You Love About Coffee
          </h1>
          <div className="promo__cont-logo">
            <img src={promoLogo} alt="promo-logo" />
          </div>
          <div className="promo__cont-subtitle">
            We makes every day full of energy and taste
          </div>
          <div className="promo__cont-descr">Want to try our beans?</div>
          <button className="promo__cont-btn">More</button>
        </div>
      </div>
    </div>
  );
};

export default AppPromo;
