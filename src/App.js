import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from "react";
import Characters from "./Components/Characters/Characters";
import Filters from "./Components/Filters/Filters";
import Pagination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";
import useDebouncedFunction from "./hooks/useDebouncedFunction";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(2);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [like, setLike] = useState(false);

  const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;
  const handleLike = (id) => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };
  const handleSearch = useDebouncedFunction((e) => {
    setPage(1);
    setSearch(e.target.value);
  }, 500);

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      try {
        const res = await axios.get(api);
        console.log(res, "res");
        setCharacters(res.data.results);
        setInfo(res.data.info);
        console.log(res.data.results, "chars");
        setLoading(false);
      } catch (e) {
        console.error(e);
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };
    getCharacters();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center my-4">Rick and Morty</h1>
      <Search search={search} setPage={setPage} onSearch={handleSearch} />
      <Filters />
      <div className="container">
        <div className="row">
          <div className="col-12">
            {characters.length !== 0 ? (
              <Characters
                like={like}
                handleLike={handleLike}
                characters={characters}
                loading={loading}
              />
            ) : (
              <h2>Loading...</h2>
            )}
          </div>
        </div>
      </div>
      <Pagination page={page} info={info} setPage={setPage} />
    </div>
  );
}

export default App;
