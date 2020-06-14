import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowBack } from "@styled-icons/evaicons-solid/ArrowBack";
import { ArrowForward } from "@styled-icons/evaicons-solid/ArrowForward";

const PaginationTable = styled.ul`
  display: flex;
`;

const ArrowContainer = styled.li`
  width: 30px;
  height: auto;
`;

// Te quedó muy bien este componente! Vas por un buen camino para hacerlo funcional. 
// No dejes de escribirme si queres seguirlo
// Por otro lado, podes chusmear algunas librerias que simplifcan este tipo de componentes
// Por ejemplo, Material UI: https://material-ui.com/components/pagination/

const Pagination = ({ pageNumbers, paginate }) => {
  const pageNumbersArray = [];

  for (let i = 1; i <= pageNumbers; i++) {
    pageNumbersArray.push(i);
  }
  return (
    <PaginationTable>
      <Link>
        <ArrowContainer>
          <ArrowBack />
        </ArrowContainer>
      </Link>

      {pageNumbersArray.map(
        (number) =>
          number <= 5 && (
            <li key={number}>
              <Link onClick={() => paginate(number)}>{number}</Link>
            </li>
          )
      )}
      <span>
        <Link to="#">...</Link>
      </span>
      <span>
        <Link>{pageNumbers}</Link>
      </span>
      <Link>
        <ArrowContainer>
          <ArrowForward />
        </ArrowContainer>
      </Link>
    </PaginationTable>
  );
};

export default Pagination;
