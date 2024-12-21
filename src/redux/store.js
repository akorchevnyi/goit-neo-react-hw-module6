import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { itemPersistedReducer } from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({
    contacts: itemPersistedReducer,
    filters : filtersReducer
});

export const store = configureStore({
    reducer   : rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"]
            }
        })
});

export const persistor = persistStore(store);
