import FilterButtons from "./FilterButtons";
const Filter = ({setPageNumber,setStatus,setSpecies,setGender}) => {
    const categories = [
        {
            category: "Status",
            parameters: ["Alive", "Dead", "unknown"],
            setCategory:setStatus
        },
        {
            category: "Species",
            parameters: ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological", "Unknown", "Animal", "Disease", "Robot", "Cronenberg", "Planet"],
            setCategory:setSpecies
        },
        {
            category: "Gender",
            parameters: ["Female", "Male", "Genderless", "Unknown"],
            setCategory:setGender
        }

    ]
    return (
        <div className="col-3">
            <div className="text-center fw-bold fs-4 mb-2">
                Filters
            </div>
            <div onClick={
                ()=>{
                    setPageNumber(1);
                    setStatus("");
                    setSpecies("");
                    setGender("");
                    window.location.reload();
                }
            } className="text-center fs-6 text-decoration-underline text-primary mb-3" style={{
                cursor: "pointer"
            }}>
                Clear Filter
            </div>
            <div className="accordion" id="accordionExample">
                {categories.map((x, index) => {
                    if (!index)
                        return (
                            <div className="accordion-item" key={index}>
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        {x.category}
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <FilterButtons parameters={x.parameters} category={x.category} setPageNumber={setPageNumber}  setCategory={x.setCategory}/>
                                </div>
                            </div>
                        )
                    return (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                                {x.category}
                                </button>
                            </h2>
                            <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                <FilterButtons parameters={x.parameters} category={x.category} setPageNumber={setPageNumber}  setCategory={x.setCategory}  />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Filter;