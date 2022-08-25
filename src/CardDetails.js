import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const CardDetails = () => {
    const [character, setCharacter] = useState(null);
    const { id } = useParams();
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => setCharacter(data)).catch(e => console.log(e));
    }, []);
    const cardStatus = {
        Alive: <div className="bg-success text-white rounded text-center fw-bold fs-5 my-3 w-100" style={{
            paddingTop: "2px",
            paddingBottom: "2px"
        }}>Alive</div>,
        Dead: <div className="bg-danger text-white rounded text-center fw-bold fs-5 my-3 w-100" style={{
            paddingTop: "2px",
            paddingBottom: "2px"
        }}>Dead</div>,
        unknown: <div className="bg-secondary text-white rounded text-center fw-bold fs-5 my-3 w-100" style={{
            paddingTop: "2px",
            paddingBottom: "2px"
        }}>Unknown</div>
    }
    return (
        <div className="mt-4">
            <div className="container d-flex flex-column" style={{
                width: "fit-content"
            }}>
                <h1 className="text-center my-4">{character?.name}</h1>
                <img src={character?.image} alt="" className="img-fluid" />
                {cardStatus[character?.status]}
                <div className="info">
                    <div className="fs-6"><span className="fw-bold">Gender : </span> {character?.gender}</div>
                    <div className="fs-6 "><span className="fw-bold">Location : </span>{character?.location?.name}</div>
                    <div className="fs-6"><span className="fw-bold">Origin : </span>{character?.origin?.name}</div>
                    <div className="fs-6"><span className="fw-bold">Species : </span> {character?.species}</div>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;