import { configureStore, combineReducers } from '@reduxjs/toolkit';
import common, { CommonState } from './features/commonSlice';

const store = configureStore({
  reducer: combineReducers({
    common,
  }),
});

//! select 헬퍼 ex) const {} = useSelector(selectUserSlice);
export const selectCommonSlice = (state: RootState): CommonState =>
  state.common;
export type RootState = ReturnType<typeof store.getState>;
export default store;
