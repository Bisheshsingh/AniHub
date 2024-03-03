import axios from "axios";

const MAIN_URL = 'http://localhost:8080';

const AnimeListDataFetcher = {
    getAll: async () => {
        const result = await axios.get(`${MAIN_URL}/all`);
        return result.data;
    },

    getAllByPage: async (page) => {
        const result = await axios.get(`${MAIN_URL}/all/${page}`);
        return result.data;
    },

    searchByText: async (text) => {
        const result = await axios.get(`${MAIN_URL}/search/${text}`);
        return result.data;
    },

    searchByTextAndPage: async (text, page) => {
        const result = await axios.get(`${MAIN_URL}/all/${text}/${page}`);
        return result.data;
    }
}

export default AnimeListDataFetcher;