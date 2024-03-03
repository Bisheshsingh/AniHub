import SearchBar from "./SearchBar";
import SlideBar from "./SlideBar";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="w-100 d-inline mt-2">
                <SlideBar/>
                <div className="d-flex ms-5 float-lg-start">
                    <h1 className="bg-black text-light">Ani</h1>
                    <h1 className="bg-warning text-dark">Hub</h1>
                </div>
                <SearchBar/>
            </div>
        </nav>
    );
}

export default NavBar;