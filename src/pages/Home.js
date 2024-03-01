import WithErrorHandler from "../components/WithErrorHandler";
import NavBar from "../components/NavBar";
import Spinner from "../components/Spinner";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <div className="homeBg" style={{height: '100vh', width: '100%'}}>
                {/*<Spinner/>*/}
            </div>
        </div>
    );
}

export default WithErrorHandler(Home);