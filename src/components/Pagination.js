import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pagination = ({ postsPerPage, pageNumbers, paginate }) => {
  const pageNumbersArray = [];
  for (let i = 1; i <= pageNumbers; i++) {
    pageNumbersArray.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbersArray.map(
          (number) =>
            number <= 5 && (
              <li key={number}>
                <Link onClick={() => paginate(number)}>{number}</Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Pagination;
