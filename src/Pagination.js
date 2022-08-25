import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ setPageNumber, pageNumber, info }) => {
    const [width, setWidth] = useState(window.innerWidth);
    console.log(width);
    const changeWidth = () => {
        setWidth(window.innerWidth);
        //console.log(width);
    }
    useEffect(() => {
        window.addEventListener('resize',changeWidth);
        return ()=>{window.removeEventListener('resize',changeWidth)};
    }, [])
    return (
        <ReactPaginate
            pageCount={info?.pages}
            forcePage={pageNumber - 1}
            className="pagination d-flex justify-content-center gap-3 my-5"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
            previousClassName="btn btn-primary page-item page-btn"
            nextClassName="btn btn-primary page-item page-btn"
            nextLinkClassName="text-white text-decoration-none"
            previousLinkClassName="text-white text-decoration-none"
            nextLabel="Next"
            previousLabel="Prev"
            onPageChange={(currentPage) => {
                console.log(currentPage.selected);
                setPageNumber(currentPage.selected + 1);
            }}
            pageRangeDisplayed={width>500?2:1}
            marginPagesDisplayed={width>500?2:1}
        />
    );
}

export default Pagination;