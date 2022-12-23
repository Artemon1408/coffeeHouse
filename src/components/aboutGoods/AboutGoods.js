import "./aboutGoods.scss";
import goodsImg from "../../resources/image/img/goods_img.jpg";
import blackLogo from "../../resources/image/logo/BlackLogo.png";

const AboutGoods = () => {
  return (
    <div className="goods">
      <div className="goods__about">
        <div className="goods__image">
          <img src={goodsImg} alt="goods" />
        </div>
        <div className="goods__descr">
          <div className="goods__descr-title">About our goods</div>
          <div className="goods__descr-logo">
            <img src={blackLogo} alt="logo" />
          </div>
          <div className="goods__descr-text">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. <br />
            <br /> Afraid at highly months do things on at. Situation recommend
            objection do intention so questions. As greatly removed calling
            pleased improve an. Last ask him cold feel met spot shy want.
            Children me laughing we prospect answered followed. At it went is
            song that held help face
          </div>
        </div>
      </div>
      <div className="goods__divider"></div>
    </div>
  );
};
export default AboutGoods;
