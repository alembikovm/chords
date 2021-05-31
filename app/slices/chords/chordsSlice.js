import {createSlice} from '@reduxjs/toolkit';

export const chordsSlice = createSlice({
    name: 'chords',
    initialState: {
        filters: {
            show: false,
        }
    },
    reducers: {
        toggleShowFilters: (state) => {
            state.filters.show = !state.filters.show;
        },
    },
});

export const { toggleShowFilters } = chordsSlice.actions;

export default chordsSlice.reducer;