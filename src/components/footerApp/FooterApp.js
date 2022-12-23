import AppMenu from "../appMenu/AppMenu";
import logoDark from "../../resources/image/logo/logoBlack.png";
import BlackLogo from "../../resources/image/logo/BlackLogo.png";
import "./footerApp.scss";
const FooterApp = () => {
  return (
    <footer className="footer">
      <div className="container">
        <AppMenu
          logo={logoDark}
          textColor={" colorB"}
          menuPosition={" menu_center"}
        />
        <div className="footer__logo">
          <img src={BlackLogo} alt="footer-logo" />
        </div>
      </div>
    </footer>
  );
};

export default FooterApp;
