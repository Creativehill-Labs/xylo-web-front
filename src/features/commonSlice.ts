import { createSlice } from '@reduxjs/toolkit';

//! 초기 상태 타입
export type CommonState = {
  navIsOpen: boolean;
};

//! 초기 상태
const initialState: CommonState = {
  navIsOpen: false,
};

//! Reducer Slice
const commonSlice = createSlice({
  name: `common`,
  initialState,
  reducers: {
    setNavIsOpen: (state, action) => {
      state.navIsOpen = action.payload;
    },
  },
});

export const { setNavIsOpen } = commonSlice.actions;

export default commonSlice.reducer;
