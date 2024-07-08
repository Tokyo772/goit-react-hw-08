import { configureStore } from "@reduxjs/toolkit";

import filterReduce from "./filter/slice";
import contactsReducer from "./contacts/slice";
import authReducer from "./auth/slice";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReduce,
    auth: authReducer,
  },
});

export default store;
