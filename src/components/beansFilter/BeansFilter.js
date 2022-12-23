import { useState } from "react";
import ListBeansFilter from "../listBeansFilter/ListBeansFilterItems";

import "./beansFilter.scss";

const BeansFilter = () => {
  const data = [
    { name: "AROMISTICO Coffee 1 kg", country: "Brazil", id: 1 },
    { name: "Jacobs Coffee 1 kg", country: "Kenya", id: 2 },
    { name: "Nescafe Coffee 2 kg", country: "Columbia", id: 3 },
    { name: "AROMISTICO Coffee 1 kg", country: "Brazil", id: 4 },
    { name: "Jacobs Coffee 1 kg", country: "Kenya", id: 5 },
    { name: "Nescafe Coffee 2 kg", country: "Columbia", id: 6 },
  ];

  const [filter, setFilter] = useState("all");
  const [term, setTerm] = useState("");

  const searchCoffee = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term) > -1;
    });
  };

  const filterPost = (items, filter) => {
    switch (filter) {
      case "Brazil":
        return items.filter((item) => item.country === "Brazil");
      case "Kenya":
        return items.filter((item) => item.country === "Kenya");
      case "Columbia":
        return items.filter((item) => item.country === "Columbia");
      default:
        return items;
    }
  };

  const visibleData = filterPost(searchCoffee(data, term), filter);

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
            onChange={(e) => setTerm(e.target.value)}
          />
        </label>
        <label className="search__btns">
          Or filter
          <button onClick={() => setFilter("Brazil")} className="search__btn">
            Brazil
          </button>
          <button onClick={() => setFilter("Kenya")} className="search__btn">
            Kenya
          </button>
          <button onClick={() => setFilter("Columbia")} className="search__btn">
            Columbia
          </button>
        </label>
      </div>
      <ListBeansFilter data={visibleData} />
    </div>
  );
};

export default BeansFilter;
