import { useState, useEffect } from "react";

const SelectOption = ({ link, setNumber }) => {
    const [options, setOptions] = useState([]);
    useEffect(() => {
        (async () => {
            console.log(`https://rickandmortyapi.com/api/${link}`);
            const data = await fetch(`https://rickandmortyapi.com/api/${link}`).then(response => response.json()).catch(err => console.log(err));
            console.log(data);
            const temp = [];
            for (let i = 1; i <= data.info.count; ++i) {
                temp.push(<option className="text-capitalize" value={i} key={i}>{link} - {i}</option>)
            }
            setOptions(temp);
        })();

    }, []);
    return (
        <select onChange={(e) => {
            setNumber(e.target.value);
        }
        } className="form-select text-capitalize" aria-label="Default select example">
            {options}
        </select>
    );
}

export default SelectOption;