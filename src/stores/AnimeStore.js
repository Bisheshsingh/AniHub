import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    animes: []
}

const animeStoreSlice = createSlice({
    name: 'AnimeStoreSlice',
    initialState,
    reducers : {
        setLoading : (state, action) => {
            state.loading = action.payload;
        },

        addAnime : (state, action) => {
            state.animes.push(action.payload);
        },

        setAnimes : (state, action) => {
            state.animes = action.payload;
        }
    }
});

const animeStore = configureStore({
    reducer : { animeList : animeStoreSlice.reducer }
});

export const {setLoading, addAnime, setAnimes} = animeStoreSlice.actions;
export default animeStore;