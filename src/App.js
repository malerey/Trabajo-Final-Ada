import React from "react";
import BarraDeNav from "./components/BarraDeNav";
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import VideoComponent from "./components/VideoComponent";
import TvComponent from "./components/TvComponent";
import SearchComponent from "./components/SearchComponent";
import DisplayCardsFull from "./components/DisplayCardsFull";
import CardInfoFull from "./components/CardInfoFull"


  

const App = () => {

  return (
     <Router>
        <BarraDeNav/>
          
          <Switch>
            <Route exact path="/" component={HomeComponent}></Route>
            <Route path="/:category/:id" component={CardInfoFull}></Route> 
            <Route path="/:category" component={DisplayCardsFull}></Route>
            <Route path="/video" component={VideoComponent}></Route>
            <Route path="/tv" component={TvComponent}></Route>
            <Route path="/search" component={SearchComponent}></Route>
          </Switch>
         </Router>
  );
};

export default App;
