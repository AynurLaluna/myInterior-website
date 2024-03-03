import {configureStore} from '@reduxjs/toolkit';
import RootReducer from './rootReducer';

export type DispatchProperties = typeof store.dispatch;
export type StateProperties = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: RootReducer,
})

export default store;