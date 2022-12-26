import { useHttp } from "../../hooks/http.hook";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  coffeeFetching,
  coffeeFetched,
  coffeeFetchingError,
} from "../../actions";
import Spinner from "../spinner/Spinner";
import CoffeeItem from "../coffeeItem/CoffeeItem";

const ListBeansFilter = () => {
  const { filteredCoffee, coffeeLoadingStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(coffeeFetching());
    request("http://localhost:3001/coffee")
      .then((data) => dispatch(coffeeFetched(data)))
      .catch(() => dispatch(coffeeFetchingError()));

    // eslint-disable-next-line
  }, []);

  if (coffeeLoadingStatus === "loading") {
    return <Spinner />;
  } else if (coffeeLoadingStatus === "error") {
    <h5>пусто...</h5>;
  }

  const renderHeroesList = (arr) => {
    return arr.map(({ id, ...props }) => {
      return <CoffeeItem key={id} {...props} />;
    });
  };
  const elements = renderHeroesList(filteredCoffee);
  return <ul className="beansFilter__items">{elements}</ul>;
};

export default ListBeansFilter;
