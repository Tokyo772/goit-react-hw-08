import { configureStore } from "@reduxjs/toolkit";

import filterReduce from "./filtersSlice";
import contactsReducer from "./contactsSlice";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReduce,
  },
});

export default store;
