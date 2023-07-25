import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import themeReducer from "./themeSlice";
import filterReducer from "./filterSlice";
import searchSlice from "./searchSlice";
import isDetailsReducer from "./isDetailsSlice";
import detailsDataReducer from "./detailsDataSlice";

const rootReducer = {
  data: dataReducer,
  theme: themeReducer,
  filter: filterReducer,
  search: searchSlice,
  isDetails: isDetailsReducer,
  detailsData: detailsDataReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
