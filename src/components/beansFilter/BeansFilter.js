import { useDispatch, useSelector } from "react-redux";
import ListBeansFilter from "../listBeansFilter/ListBeansFilterItems";
import { activeFilterChanged, searchCoffee } from "../../actions";
import "./beansFilter.scss";

const BeansFilter = () => {
  const { term } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="beansFilter">
      <div className="search">
        <label className="search__panel">
          {" "}
          Lookiing for
          <input
            type="text"
            className="search__input"
            placeholder="start typing here..."
            value={term}
            onChange={(e) => dispatch(searchCoffee(e.target.value))}
          />
        </label>
        <label className="search__btns">
          Or filter
          <button
            onClick={() => dispatch(activeFilterChanged("Brazil"))}
            className="search__btn"
          >
            Brazil
          </button>
          <button
            onClick={() => dispatch(activeFilterChanged("Kenya"))}
            className="search__btn"
          >
            Kenya
          </button>
          <button
            onClick={() => dispatch(activeFilterChanged("Columbia"))}
            className="search__btn"
          >
            Columbia
          </button>
        </label>
      </div>
      <ListBeansFilter />
    </div>
  );
};

export default BeansFilter;
