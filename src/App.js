import React from "react";
import BarraDeNav from "./components/BarraDeNav";
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import VideoComponent from "./components/VideoComponent";
import TvComponent from "./components/TvComponent";
import SearchComponent from "./components/SearchComponent";
import DisplayCardsFull from "./components/DisplayCardsFull";

const AppContainer = styled.div`
a {
  text-decoration: none;
}
`

const App = () => {

  return (
    <AppContainer>
      <Router>
        <BarraDeNav/>
          
          <Switch>
            <Route exact path="/" component={HomeComponent}></Route>
            {/* <Route exact path="/home" component={HomeComponent}></Route> */}
            <Route path="/video" component={VideoComponent}></Route>
            <Route path="/tv" component={TvComponent}></Route>
            <Route path="/search" component={SearchComponent}></Route>
            <Route path="/displaycardsfull" component={DisplayCardsFull}></Route>
          </Switch>
         </Router>
    </AppContainer>
  );
};

export default App;
