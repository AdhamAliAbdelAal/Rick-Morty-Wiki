import { useState, useEffect } from "react";
import SelectOption from "./SelectOption";
import Card from "./Card";
const Episodes = () => {
    const [episode, setEpisode] = useState(1);
    const [data, setData] = useState(null);
    const [results, setResults] = useState(null);
    const url = `https://rickandmortyapi.com/api/episode/${episode}`;
    useEffect(() => {
        (async () => {
            const data = await fetch(url).then(response => response.json()).catch(err => console.log(err));
            setData(data);
            const results = await Promise.all(
                data.characters.map(x => {
                    return fetch(x).then(response => response.json());
                })
            )
            setResults(results);
        })();
    }, [url])
    return (
        <div className="container">
            <div className="text-center my-4">
                <h1 className="mb-3">Episode name : <span className="text-primary">{data?.name}</span> </h1>
                <h5>Air Date : {data?.air_date}</h5>
            </div>
            <div className="row">
                <div className="col-3">
                    <h4 className="text-center mb-3">Pick Episode</h4>  
                    <SelectOption link="episode" setNumber={setEpisode}/>                  
                </div>
                <div className="col-8">
                    <div className="row">
                        <Card page="episode" results={results} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Episodes;