import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchChords = createAsyncThunk(
    'chords/fetchChords',
    async () => {
        // Change the fetchChotdsURL to API URL, when API will be ready
        const fetchChordsURL = 'https://run.mocky.io/v3/1ebf42f8-041c-4dbf-848c-3c55570f5e5e';
        const response = await axios.get(fetchChordsURL);
        return response.data
    }
);

export const fetchChordById = createAsyncThunk(
    'chords/fetchChordById',
    async (chordId) => {
        // Change the fetchChotdByIdURL to API URL, when API will be ready
        const fetchChotdByIdURL = 'https://run.mocky.io/v3/d487ed34-63cf-4355-9af5-fad54e8c284e';
        const response = await axios.get(fetchChotdByIdURL);
        return response.data;
    },
);

export const chordsSlice = createSlice({
    name: 'chords',
    initialState: {
        chords: [],
        selectedChord: null,
        selectedChordStatus: 'idle',
        currentChordType: '',
        loading: false,
    },
    reducers: {
        setChords: (state, action) => {
            state.chords = action.payload;
        },
        setSelectedChord: (state, action) => {
            state.selectedChord = action.payload;
        },
        setSelectedChordStatus: (state, action) => {
            state.setSelectedChordStatus = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setCurrentChordType: (state, action) => {
            state.currentChordType = action.payload;
        },
    },
    extraReducers: {
        [fetchChords.fulfilled]: (state, action) => {
            state.chords = action.payload;
            state.selectedChord = action.payload[0];
        },
        [fetchChordById.pending]: (state) => {
            state.setSelectedChordStatus = 'loading';
        },
        [fetchChordById.fulfilled]: (state, action) => {
            state.selectedChordStatus = 'succeeded';
            state.selectedChord = action.payload;
        },
        [fetchChordById.rejected]: (state) => {
            state.selectedChordStatus = 'failed';
        },
    },
});

export const {
    setChords,
    setSelectedChord,
    setLoading,
    setSelectedChordStatus,
    setCurrentChordType,
} = chordsSlice.actions;

export default chordsSlice.reducer;
