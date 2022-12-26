import { createStore } from "redux";
import reducerFilter from "../reducers/filter";

const store = createStore(
  reducerFilter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
