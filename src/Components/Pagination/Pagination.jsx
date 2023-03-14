import React from "react";
import styles from "./Pagination.module.css";
const Pagination = ({ setPage, page, lastPage }) => {
  const nextPage = (page) => {
    if (page <= lastPage) {
      setPage(page + 1);
    } else {
      setPage(lastPage);
    }
  };
  const prePage = (page) => {
    if (page >= 1) {
      setPage(page - 1);
    } else {
      setPage(1);
    }
  };

  const pagesCount = Array.from(
    { length: lastPage },
    (value, index) => index + 1
  );
  return (
    <div className={styles.paginationContainer}>
      <button
        onClick={() => {
          prePage(page);
        }}
      >
        Prev
      </button>
      {pagesCount.map((pag) => (
        <div
          key={pag}
          onClick={() => {
            setPage(pag);
          }}
          className={styles.pageLink}
        >
          {pag}
        </div>
      ))}
      <button
        onClick={() => {
          nextPage(page);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
