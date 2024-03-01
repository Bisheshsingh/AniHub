import narutoImg from '../resources/naruto.png';
import SearchBar from "./SearchBar";
import SlideBar from "./SlideBar";

const NavBar = () => {
    return (
        <nav className="navbar">
            <SlideBar/>

            <div className="d-flex ms-3">
                <h1 className="bg-black text-light">Ani</h1>
                <h1 className="bg-warning text-dark">Hub</h1>
                <img alt="naruto" src={narutoImg}
                     style={{ width : "7%" }}/>
            </div>

            <SearchBar/>
        </nav>
    );
}

export default NavBar;