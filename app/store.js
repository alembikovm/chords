import {configureStore} from '@reduxjs/toolkit';
import chordsReducer from './slices/chords/chordsSlice';

export default configureStore({
   reducer: {
      chords: chordsReducer,
   },
});