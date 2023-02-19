import React from 'react';
import ReactPaginate from "react-paginate";
import "./Pagination.css"
const Pagination = ({setPage,page,info}) => {

    return (
        <ReactPaginate
            className="pagination justify-content-center gap-3 my-2"
            onPageChange={(data)=>{
                setPage(data.selected+1)
            }}
            activeClassName="active"
            nextLabel="Next"
            previousLabel="Prev"
            previousClassName="btn btn-primary"
            nextClassName="btn btn-primary"
            nextLinkClassName="textWhite"
            previousLinkClassName="textWhite"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            pageCount={info?.pages}/>
    );
};

export default Pagination;