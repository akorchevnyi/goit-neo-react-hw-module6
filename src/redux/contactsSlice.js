import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const slice = createSlice({
        name        : "contacts",
        initialState: {
            items: []
        },
        reducers    : {

            addContact: {
                reducer(state, { payload }) {
                    state.items.push(payload);
                },

                prepare: addContactPrepare
            },

            deleteContact: (state, { payload }) => {
                state.items = state.items.filter(item => item.id !== payload);
            }
        }
    }
);

export const { addContact, deleteContact } = slice.actions;

export const selectContacts = ({ contacts }) => contacts.items;

const counterReducer=  slice.reducer;
const persistConfig = {
    key: "items",
    storage,
};
export const itemPersistedReducer = persistReducer(persistConfig, counterReducer);

function addContactPrepare({ name, number }) {
    return {
        payload: {
            name,
            number,
            id: nanoid()
        }
    };
}
