import { createSlice } from '@reduxjs/toolkit';

let nextContactId = 1; 

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
    contacts: [],
    filter: '',
    },
    reducers: {
    addContact: (state, action) => {
        const newContact = { ...action.payload, id: nextContactId++ };
        state.contacts.push(newContact);
    },
    deleteContact: (state, action) => {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    setFilter: (state, action) => {
        state.filter = action.payload;
    },
    },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;