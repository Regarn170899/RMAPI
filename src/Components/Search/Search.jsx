import React from "react";
import styles from "./Search.module.css";
const Search = ({ onSearch, setPage }) => {
  return (
    <form className="d-flex justify-content-center">
      <input onChange={onSearch} type="text" className={styles.inputSearch} />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="btn btn-primary mx-4"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
