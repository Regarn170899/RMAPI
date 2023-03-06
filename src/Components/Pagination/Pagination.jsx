import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";
const Pagination = ({ setPage, page, info }) => {
  return (
    <ReactPaginate
      className={styles.pagination}
      onPageChange={(data) => {
        setPage(data.selected + 1);
      }}
      activeClassName={styles.active}
      nextLabel="Next"
      previousLabel="Prev"
      previousClassName={styles.paginationBtn}
      nextClassName={styles.paginationBtn}
      nextLinkClassName={styles.textWhite}
      previousLinkClassName={styles.textWhite}
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.pageLink}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
