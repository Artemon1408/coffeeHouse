import "./ourBeans.scss";
import beans_img from "../../resources/image/img/beans_img.png";
import blackLogo from "../../resources/image/logo/BlackLogo.png";

const OurBeans = () => {
  return (
    <div className="beans">
      <div className="container">
        <div className="beans__about">
          <div className="beans__image">
            <img src={beans_img} alt="iamge" />
          </div>
          <div className="beans__descr">
            <div className="beans__descr-title">About our beans</div>
            <div className="beans__descr-logo">
              <img src={blackLogo} alt="logo" />
            </div>
            <div className="beans__descr-text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. <br />
              <br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention so questions. As greatly removed calling
              pleased improve an. Last ask him cold feel met spot shy want.
              Children me laughing we prospect answered followed. At it went is
              song that held help face.
            </div>
          </div>
        </div>
        <div className="beans__divider"></div>
      </div>
    </div>
  );
};

export default OurBeans;
