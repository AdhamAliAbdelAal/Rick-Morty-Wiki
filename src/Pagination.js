import ReactPaginate from "react-paginate";
const Pagination = ({ setPageNumber,pageNumber, info }) => {
    return (
        <ReactPaginate
                pageCount={info?.pages}
                forcePage={pageNumber-1}
                className="pagination d-flex justify-content-center gap-3 my-5"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                activeClassName="active"
                previousClassName="btn btn-primary page-item"
                nextClassName="btn btn-primary page-item"
                nextLinkClassName="text-white text-decoration-none"
                previousLinkClassName="text-white text-decoration-none"
                nextLabel="Next"
                previousLabel="Prev"
                onPageChange={(currentPage)=>{
                    console.log(currentPage.selected);
                    setPageNumber(currentPage.selected+1);
                }}
            />
    );
}

export default Pagination;