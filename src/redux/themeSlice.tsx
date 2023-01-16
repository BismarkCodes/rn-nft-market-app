import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: '',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    SET_IS_DARK_MODE: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const {SET_IS_DARK_MODE} = themeSlice.actions;

export default themeSlice.reducer;
