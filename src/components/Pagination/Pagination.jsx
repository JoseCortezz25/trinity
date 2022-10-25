import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ data=[], children, dataPerPage=10 }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const pagesVisited = pageNumber * dataPerPage;
  const displayData = children.slice(pagesVisited, pagesVisited + dataPerPage);
  const pageCount = Math.ceil(data.length / dataPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {displayData}
      <ReactPaginate
        previousLabel="Atras"
        nextLabel="Siguiente"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="ButtonsPagination"
        previousLinkClassName="BtnAtras"
        nextLinkClassName="BtnSiguiente"
        disabledClassName="PaginationDisabled"
        activeClassName="PaginationActive"
      />
    </>
  );
};

export default Pagination;
