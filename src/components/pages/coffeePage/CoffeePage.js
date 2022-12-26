import BeansFilter from "../../beansFilter/BeansFilter";
import OurBeans from "../../ourBeans/OurBeans";
import OurCoffee from "../../ourCoffee/OurCoffee";
import FooterApp from "../../footerApp/FooterApp";

const CoffeePage = () => {
  return (
    <>
      <OurCoffee />
      <OurBeans />
      <BeansFilter />
      <FooterApp />
    </>
  );
};

export default CoffeePage;
