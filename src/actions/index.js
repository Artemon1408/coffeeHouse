export const coffeeFetching = () => {
  return {
    type: "COFFEE_FETCHING",
  };
};

export const coffeeFetched = (coffee) => {
  return {
    type: "COFFEE_FETCHED",
    payload: coffee,
  };
};

export const coffeeFetchingError = () => {
  return {
    type: "COFFEE_FETCHING_ERROR",
  };
};

export const activeFilterChanged = (filter) => {
  return {
    type: "ACTIVE_FILTER_CHANGED",
    payload: filter,
  };
};

export const searchCoffee = (name) => {
  return {
    type: "SEARCH_COFFEE",
    payload: name,
  };
};
