import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Card from "./Card";
import Filter from "./Filter";
import { useState, useEffect } from 'react';
import Pagination from "./Pagination";
import Search from "./Search";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  //console.log(pageNumber);
  console.log("ricky");
  const [data, setData] = useState(null);
  const { info, results } = (data ? data : []);
  const [search, setSearch] = useState("");
  const [status,setStatus]=useState("");
  const [species,setSpecies]=useState("");
  const [gender,setGender]=useState("");
  //console.log(data);
  const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;
  useEffect(() => {
    fetch(url).then(response => response.json()).then(data => setData(data)).catch(err => console.log(err));
  }, [url])
  return (
    <div className="App">
      <h1 className="text-center ubuntu">Rick & Morty <span className="text-primary">Wiki</span></h1>
      <div className="container">
        <Search setSearch={setSearch} setPageNumber={setPageNumber} />
        <div className="row">
          <Filter setPageNumber={setPageNumber}  setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} />
          <div className="col-8">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
        {results && <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info} />}
      </div>
    </div>
  );
}

export default App;
