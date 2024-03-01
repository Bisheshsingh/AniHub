import './App.css';
import React from "react";
import Home from "./pages/Home"
import Anime from "./pages/Anime"
import Support from "./pages/Support"
import NotFoundPage from "./pages/NotFoundPage"
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={ <Home/> }></Route>
            <Route exact path="/anime" element={ <Anime/> }></Route>
            <Route exact path="/support" element={ <Support/> }></Route>
            <Route exact path="*" element={ <NotFoundPage/> }></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
