import AboutGoods from "../../aboutGoods/AboutGoods";
import FooterApp from "../../footerApp/FooterApp";
import ListBeansFilter from "../../listBeansFilter/ListBeansFilterItems";
import PleasureHeader from "../../pleasureHeader/PleasureHeader";

const PleasurePage = () => {
  return (
    <>
      <PleasureHeader />
      <AboutGoods />
      <div className="beansFilter">
        <ListBeansFilter />
      </div>

      <FooterApp />
    </>
  );
};

export default PleasurePage;
