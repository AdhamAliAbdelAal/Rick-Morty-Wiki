

const FilterButtons = ({ parameters,category,setPageNumber,setCategory }) => {
    return (
        <div className="accordion-body d-flex flex-wrap gap-3">
            {parameters.map((parameter) => {
                return (
                    <div key={parameter}>
                        <input onClick={()=>{
                            setPageNumber(1);
                            setCategory(parameter);
                        }} type="radio" className="btn-check" name={category} id={parameter} />
                        <label className="btn btn-outline-primary" htmlFor={parameter}>{parameter}</label>
                    </div>
                )
            })}
        </div>
    );
}

export default FilterButtons;