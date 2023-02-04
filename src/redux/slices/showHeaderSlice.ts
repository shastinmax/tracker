import { showHeaderState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: showHeaderState = {
  isShow: false,
};

export const showHeaderSlice = createSlice({
  name: 'showHeader',
  initialState,
  reducers: {
    showHeader(state, action: PayloadAction<boolean>) {
      state.isShow = action.payload;
    },
  },
});

export const { showHeader } = showHeaderSlice.actions;

export default showHeaderSlice.reducer;
