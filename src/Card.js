import { Link } from 'react-router-dom';
const Card = ({ results, page }) => {
    let display = "No Characters Found :/";
    const cardStatus = {
        Alive: <span className="badge bg-success position-absolute">Alive</span>,
        Dead: <span className="badge bg-danger position-absolute">Dead</span>,
        unknown: <span className="badge bg-secondary position-absolute">unknown</span>
    }
    if (results) {
        display = results.map(x => {
            const { name, id, image, location, status } = x;
            return (
                <div className="col-lg-4 col-sm-6 col-12" key={id}>
                    <Link className="text-decoration-none text-dark" to={`/${page}/${id}`}>
                        <div className="card-div mb-4 position-relative d-flex flex-column">
                            <img src={image} alt="" className="img-fluid card-image" />
                            <div className="ps-2 mt-2 pb-2">
                                <p className="fs-5 mb-4 fw-bold">{name}</p>
                                <div className="fs-6">Last Location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                            {cardStatus[status]}
                        </div>
                    </Link>
                </div>
            );
        })
    }
    return display;
}

export default Card;