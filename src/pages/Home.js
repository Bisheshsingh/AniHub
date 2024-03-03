import WithErrorHandler from "../hoc/WithErrorHandler";
import NavBar from "../components/NavBar";
import WithAnimeStore from "../hoc/WithAnimeStore";
import AnimeList from "../components/AnimeList";

const Home = () => {
    return (
        <div className="HomePage">
            <NavBar/>
            <div className="mt-5">
                <AnimeList/>
            </div>
        </div>
    );
}

export default WithAnimeStore(WithErrorHandler(Home));