import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectName } from "./filtersSlice";

const initialState = {
  items: [],
  loading: false,
  error: null,
};
const handlePending = (state) => {
  state.loading = true;
};
const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter((item) => item.id !== payload.id);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
  selectors: {
    selectContacts: (state) => state.items,
    selectLoader: (state) => state.loading,
    selectError: (state) => state.error,
  },
});

export const { selectLoader, selectError, selectContacts } =
  contactsSlice.selectors;

export default contactsSlice.reducer;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectName],
  (contacts, nameFilter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);

//  reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.items.push(action.payload);
//       },
//       prepare({ name, number }) {
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//   },
