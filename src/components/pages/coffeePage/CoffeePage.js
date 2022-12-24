import BeansFilter from "../../beansFilter/BeansFilter";
import OurBeans from "../../ourBeans/OurBeans";
import OurCoffee from "../../ourCoffee/OurCoffee";
import FooterApp from "../../footerApp/FooterApp";

const CoffeePage = ({ data }) => {
  return (
    <>
      <OurCoffee />
      <OurBeans />
      <BeansFilter data={data} />
      <FooterApp />
    </>
  );
};

export default CoffeePage;
