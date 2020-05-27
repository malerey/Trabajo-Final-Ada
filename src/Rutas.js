import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import VideoComponent from "./VideoComponent";
import TvComponent from "./TvComponent";
import SearchComponent from "./SearchComponent";
import DisplayCardsFull from "./DisplayCardsFull";

const Rutas = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeComponent}></Route>
        {/* <Route exact path="/home" component={HomeComponent}></Route> */}
        <Route path="/video" component={VideoComponent}></Route>
        <Route path="/tv" component={TvComponent}></Route>
        <Route path="/search" component={SearchComponent}></Route>
        <Route path="/displaycardsfull" component={DisplayCardsFull}></Route>
      </Switch>
    </Router>
  );
};

export default Rutas;
