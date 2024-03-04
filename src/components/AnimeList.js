import {useDispatch, useSelector} from "react-redux";
import Spinner from "./Spinner";
import {useEffect} from "react";
import {setAnimes, setLoading} from "../stores/AnimeStore";
import AnimeListDataFetcher from "../services/AnimeListDataFetcher";
import AnimeCard from "./AnimeCard";


const AnimeList = () => {
    const state = useSelector(state => state.animeList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        AnimeListDataFetcher.getAll().then(data => {
            dispatch(setLoading(false));
            dispatch(setAnimes(data));
        });
    }, [dispatch]);

    return (
        <div className="row m-3">
            {
                state.loading ? <Spinner/>
                    : state.animes.map(anime => (
                        <AnimeCard key={anime.name} anime={anime}/>
                    ))
            }
        </div>
    );
}

export default AnimeList;