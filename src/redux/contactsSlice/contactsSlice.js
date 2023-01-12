import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: initialState,
  // Об'єкт редюсерів
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload]; 
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(c => c.id !== action.payload)
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { removeContact, addContact, setFilter } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;