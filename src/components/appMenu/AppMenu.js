import { NavLink } from "react-router-dom";
import "./appMenu.scss";

const AppMenu = ({ logo, textColor, menuPosition }) => {
  let position = "header__menu" + menuPosition;
  let classNames = "header__menu-link" + textColor;

  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul className={position}>
            <img src={logo} alt="logo" />
            <NavLink to="/" className={classNames}>
              Coffee house
            </NavLink>
            <NavLink to="/coffeepage" className={classNames}>
              Our coffee
            </NavLink>
            <NavLink to="/pleasure" className={classNames}>
              For your pleasure
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppMenu;
