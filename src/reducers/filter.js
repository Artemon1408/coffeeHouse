const initialState = {
  coffee: [],
  coffeeLoadingStatus: "idle",
  filteredCoffee: [],
  activeFilter: "all",
  term: "",
};

const reducerFilter = (state = initialState, action) => {
  switch (action.type) {
    case "COFFEE_FETCHING":
      return {
        ...state,
        coffeeLoadingStatus: "loading",
      };
    case "COFFEE_FETCHED":
      return {
        ...state,
        coffee: action.payload,
        filteredCoffee:
          state.activeFilter === "all"
            ? action.payload
            : action.payload.filter(
                (item) => item.element === state.activeFilter
              ),
        coffeeLoadingStatus: "idle",
      };
    case "COFFEE_FETCHING_ERROR":
      return {
        ...state,
        coffeeLoadingStatus: "error",
      };

    case "ACTIVE_FILTER_CHANGED":
      return {
        ...state,
        activeFilter: action.payload,
        filteredCoffee:
          action.payload === "all"
            ? state.coffee
            : state.coffee.filter((item) => item.country === action.payload),
      };

    case "SEARCH_COFFEE":
      return {
        ...state,
        term: action.payload,
        filteredCoffee:
          action.payload === "all"
            ? state.coffee
            : state.coffee.filter((item) => {
                return item.name.toLowerCase().indexOf(action.payload) > -1;
              }),
      };

    default:
      return state;
  }
};

export default reducerFilter;
