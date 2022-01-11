



import "./miniP.css";


function Modal({ mostrar, codigo, valores, setear}) {

    if (mostrar) {

        return (
            <div className="general" id="general">
                <span onClick={() => {setear()}} className="close">&times;</span> 
                <div className="body">
                     
                    {valores.filter(item => item.id === codigo).map(x => (
                        <div key={x.id}>
                            <h2>{x.name}</h2>
                            <img
                                src={`${x.thumbnail.path}.${x.thumbnail.extension}`}
                                alt=" " style={{
                                    width: "250px",
                                    height: "250px",
                                }} />
                                <div className="body2" >
                                    {x.description}
                                </div>
                               
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }

}

export default Modal