const Search = ({setSearch,setPageNumber}) => {
    const search=(e)=>{
        setSearch(e.target.value);
        setPageNumber(1);
    }
    return (
        <form action="" className="my-5 d-flex justify-content-center gap-4">
            <input onChange={search} className="form-control w-50 search-input box-shadow" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."></input>
            <button onClick={e=> e.preventDefault()} className="btn btn-primary fs-5 box-shadow search-button">
                Search
            </button>
        </form>
    );
}

export default Search;