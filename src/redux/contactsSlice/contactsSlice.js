import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Annie Copeland', number: '227-91-26' },
  ],
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