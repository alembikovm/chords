import {createSlice} from '@reduxjs/toolkit';

export const chordsSlice = createSlice({
    name: 'chords',
    initialState: {
        chords: [],
        selectedChord: null,
        loading: false,
    },
    reducers: {
        setChords: (state, action) => {
            state.chords = action.payload;
        },
        setSelectedChord: (state, action) => {
            state.selectedChord = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const {setChords, setSelectedChord, setLoading} = chordsSlice.actions;

export default chordsSlice.reducer;