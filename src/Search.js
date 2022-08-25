const Search = ({setSearch,setPageNumber}) => {
    const search=(e)=>{
        setSearch(e.target.value);
        setPageNumber(1);
    }
    return (
        <form action="" className="mb-5 d-flex justify-content-center gap-4 align-items-center flex-column flex-sm-row">
            <input onChange={search} className="search-bar form-control search-input box-shadow" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."></input>
            <button style={{
                width:"fit-content"
            }} onClick={e=> e.preventDefault()} className="btn btn-primary fs-5 box-shadow search-button">
                Search
            </button>
        </form>
    );
}

export default Search;