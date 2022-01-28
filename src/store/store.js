import { configureStore } from '@reduxjs/toolkit';
import favReducer from '../features/FavSlice';

export const store = configureStore({
    reducer: {
        favs: favReducer 
    }
});