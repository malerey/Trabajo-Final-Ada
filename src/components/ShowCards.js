import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import LinkIndividualInfo from "./LinkIndividualInfo";
import Pagination from "./Pagination";

const DivWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-center;
  padding: 10px;
  a {
    text-decoration: none;
    margin: 0;
    height: auto;
    margin-bottom: 20px;
    padding: 0px 4px;
    overflow: hidden;
    width: 20%;
    height: 20;
  }
`;
const PaginationContainer = styled.nav`
  display: flex;
  a {
    text-decoration: none;
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
`;

const Title = styled.div`
  margin-bottom: 50px;
`;

const ShowCards = ({ info, pageNumbers, postsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const category = useParams().category;

  const paginate = (pageNumber) => {
    // setCurrentPage(pageNumber);
    console.log("hola");
  };

  return (
    <>
      <Title>
        {category === "movie"
          ? "Películas que son tendencia"
          : "Series que son tendencia"}
      </Title>
      <DivWrap>
        <LinkIndividualInfo info={info} />
      </DivWrap>
      <PaginationContainer>
        <Pagination
          postsPerPage={postsPerPage}
          pageNumbers={pageNumbers}
          paginate={paginate}
        />
      </PaginationContainer>
    </>
  );
};

export default ShowCards;
