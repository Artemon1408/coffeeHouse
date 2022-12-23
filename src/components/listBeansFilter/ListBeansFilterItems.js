import CoffeeItem from "../coffeeItem/CoffeeItem";
const ListBeansFilter = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;

    return <CoffeeItem key={id} {...itemProps} />;
  });
  return <ul className="beansFilter__items">{elements}</ul>;
};

export default ListBeansFilter;
