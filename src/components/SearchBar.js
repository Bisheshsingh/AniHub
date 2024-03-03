import '../Search.css';
import AnimeListDataFetcher from "../services/AnimeListDataFetcher";
import {useDispatch} from "react-redux";
import {setAnimes, setLoading} from "../stores/AnimeStore";


const SearchBar = () => {
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        let searchText = document.getElementById("searchText").value;
        dispatch(setLoading(true));

        AnimeListDataFetcher.searchByText(searchText).then(data => {
            dispatch(setAnimes(data));
            dispatch(setLoading(false));
            document.getElementById("searchText").value = "";
        });
    }

    return (
        <form onSubmit={onSubmit} className="form-inline mt-1 me-5 float-end">
            <input type="search"
                   id="searchText"
                   placeholder="Enter Your Search..."
                   className="circular-input"/>
            <button type="submit"
                    style={{marginLeft: '-20%', color: 'white'}}
                    className="btn">
                <i className="fas fa-search"></i>
            </button>
        </form>
    );
}

export default SearchBar;