import { createSlice} from '@reduxjs/toolkit';
import { appStorageName } from '../globals/globals';

function getFav() {
    
    let favFromStorage = localStorage.getItem(appStorageName);

    if(favFromStorage === null){
        return{ favourite: null}
    }else{
        return JSON.parse(favFromStorage);
    }
}

const favFromStorage = getFav();

const initialState = {
    favourite: favFromStorage.favourite
};

export const favSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        createFav: (state, action) => {
            const favFromStorage = JSON.stringify(action.payload);
            localStorage.setItem(appStorageName, favFromStorage);
            state.favourite = action.payload.favourite;
        },
        deleteFav: (state) => {
            localStorage.removeItem(appStorageName);
            state.favourite = null;
        }
    },
});

export const { createFav, deleteFav } = favSlice.actions;

export default favSlice.reducer;