import {Provider} from "react-redux";
import animeStore from "../stores/AnimeStore";


const WithAnimeStore = Component => props => {
     return (
         <Provider store={animeStore}>
             <Component {...props}/>
         </Provider>
     );
}

export default WithAnimeStore;