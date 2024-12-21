import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name        : "filters",
    initialState: {
        name: ""
    },
    reducers    : {
        changeFilter: (state, { payload }) => {
            return {
                ...state,
                name: payload
            };
        }
    }
});

export const { changeFilter } = slice.actions;

export const selectNameFilter = ({ filters }) => filters.name;

export default slice.reducer;
