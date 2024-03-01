
const SearchBar = () => {
    return (
        <form className="form-inline d-flex me-3">
            <input type="search"
                   id="SearchText"
                   placeholder="Enter Your Search..."
                   className="form-control"/>
            <button type="button"
                    className="btn btn-primary">
                <i className="fas fa-search"></i>
            </button>
        </form>
    );
}

export default SearchBar;