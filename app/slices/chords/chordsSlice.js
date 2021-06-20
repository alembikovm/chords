import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchChords = createAsyncThunk(
    'users/fetchChords',
    async () => {
      const response = await axios.get('https://run.mocky.io/v3/1ebf42f8-041c-4dbf-848c-3c55570f5e5e');
      return response.data
    }
  )

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
    extraReducers: {
        [fetchChords.fulfilled]: (state, action) => {
            state.chords = action.payload;
            state.selectedChord = action.payload[0];
        },
    },
});

export const {setChords, setSelectedChord, setLoading} = chordsSlice.actions;

export default chordsSlice.reducer;
