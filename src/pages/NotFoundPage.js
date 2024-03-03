import {Fragment} from "react";
import notFoundPng from '../resources/NotFound.png';
import NavBar from "../components/NavBar";
import WithAnimeStore from "../hoc/WithAnimeStore";

const NotFoundPage = () => {
    return (
       <Fragment>
           <NavBar/>
           <img className="w-100 h-100"
               alt={NotFoundPage.name}
                src={notFoundPng}/>
       </Fragment>
    );
}

export default WithAnimeStore(NotFoundPage);