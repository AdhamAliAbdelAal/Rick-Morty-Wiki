const Card = ({ results }) => {
    let display = "No Characters Found :/";
    const cardStatus={
        Alive:<span className="badge bg-success position-absolute">Alive</span>,
        Dead:<span className="badge bg-danger position-absolute">Dead</span>,
        unknown:<span className="badge bg-secondary position-absolute">unknown</span>
    }
    if (results) {
        display = results.map(x => {
            const { name, id, image, location,status } = x;
            return (
                <div className="col-4" key={id}>
                    <div className="card-div mb-4 position-relative">
                        <img src={image} alt="" className="img-fluid card-image" />
                        <div className="ps-2 mt-2 pb-2">
                            <p className="fs-5 mb-4 fw-bold">{name}</p>
                            <div className="fs-6">Last Location</div>
                            <div className="fs-5">{location.name}</div>
                        </div>
                        {cardStatus[status]}
                    </div>
                </div>
            );
        })
    }
    return display;
}

export default Card;