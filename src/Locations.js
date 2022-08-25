import { useState, useEffect } from "react";
import SelectOption from "./SelectOption";
import Card from "./Card";
const Locations = () => {
    const [location, setLocation] = useState(1);
    const [data, setData] = useState(null);
    const [results, setResults] = useState(null);
    const url = `https://rickandmortyapi.com/api/location/${location}`;
    useEffect(() => {
        (async () => {
            const data = await fetch(url).then(response => response.json()).catch(err => console.log(err));
            setData(data);
            const results = await Promise.all(
                data.residents.map(x => {
                    return fetch(x).then(response => response.json());
                })
            )
            setResults(results);
        })();
    }, [url])
    return (
        <div className="container">
            <div className="text-center my-4">
                <h1 className="mb-3">Location : <span className="text-primary">{data?.name}</span> </h1>
                <h5>Dimension : {data?.dimension}</h5>
                <h6>Type : {data?.type}</h6>
            </div>
            <div className="row">
                <div className="col-3">
                    <h4 className="text-center mb-3">Pick location</h4>  
                    <SelectOption link="location" setNumber={setLocation}/>                  
                </div>
                <div className="col-8">
                    <div className="row">
                        <Card page="location" results={results} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations;