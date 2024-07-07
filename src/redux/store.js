import { configureStore } from "@reduxjs/toolkit";

import filterReduce from "./filter/slice";
import contactsReducer from "./contacts/slice";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReduce,
  },
});

export default store;
