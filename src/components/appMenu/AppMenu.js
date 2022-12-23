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
            <li className={classNames}>Coffee house</li>
            <li className={classNames}>Our coffee</li>
            <li className={classNames}>For your pleasure</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppMenu;
