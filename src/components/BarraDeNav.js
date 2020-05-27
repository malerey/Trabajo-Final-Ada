import React, { useEffect, useState } from "react";
import { Home } from "@styled-icons/feather/Home";
import { Video } from "@styled-icons/feather/Video";
import { Tv } from "@styled-icons/feather/Tv";
import { Search } from "@styled-icons/feather/Search";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import VideoComponent from "./VideoComponent";
import TvComponent from "./TvComponent";
import SearchComponent from "./SearchComponent";
import DisplayCardsFull from "./DisplayCardsFull";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgb(220, 221, 222);
  width: 100%;
  height: auto;
  padding: 10px 20px;
  text-decoration: none;
`;

const BarraDeNav = () => {
  const [page, setPage] = useState("home");

  // const paginacion = {
  //   home: <HomeComponent />,
  //   video: <VideoComponent />,
  //   tv: <TvComponent />,
  //   search: <SearchComponent />
  // }
  return (
    <Router>
      <Nav>
        <Link to="/">
          <Home size="30" />
        </Link>
        <Link to="/video">
          <Video size="30" />
        </Link>
        <Link to="/tv">
          <Tv size="30" />
        </Link>
        <Link to="/search">
          <Search size="30" />
        </Link>
        <p>Búsqueda...</p>
        {/* <input type="text"></input> */}
        {/* hacer el valor inicial cuando haga el estado del input como: "busqueda..." */}
      </Nav>

      <Switch>
        <Route exact path="/" component={HomeComponent}></Route> 
        <Route exact path="/video" component={VideoComponent}></Route> 
        <Route exact path="/tv" component={TvComponent}></Route>
        <Route exact path="/search" component={SearchComponent}></Route>
        <Route exact path="/displaycardsfull" component={DisplayCardsFull}></Route>
      </Switch>
      {/* {paginacion[page]} */}
    </Router>
  );
};

export default BarraDeNav;
