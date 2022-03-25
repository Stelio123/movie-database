import { createSlice} from '@reduxjs/toolkit';
import { appStorageName } from '../globals/globals';

function getFav() {
    
    let favFromStorage = localStorage.getItem(appStorageName);

    if(favFromStorage === null){
        return []
    }else{
        return JSON.parse(favFromStorage);
    }
}


const initialState = {
    favourite: getFav()
};

export const favSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        createFav: (state, action) => {
            let favForStorage = [...state.favourite, action.payload];
            localStorage.setItem(appStorageName, JSON.stringify(favForStorage));
            state.favourite = favForStorage;
        },
        deleteFav: (state, action) => {
            
            let favs = state.favourite;

            let index = favs.findIndex(item => item.id === action.payload.id);

            favs.splice(index, 1);

            localStorage.setItem(appStorageName,JSON.stringify(favs));

            state.favourite = favs;
        }
    },
});



export const { createFav, deleteFav } = favSlice.actions;

export default favSlice.reducer;


