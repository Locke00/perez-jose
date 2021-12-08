import { Link } from "react-router-dom"

export function Item({item}) {
    return(
        <>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <p>Codigo: {item.id}</p>
                            <p>Tipo: {item.categoria}</p>
                            <span>{item.raza}</span>
                            <p>{item.description}</p>
                            <div>
                                <Link to={`/detalle/${item.id}`}>
                                    <button className="btn"> Ver mas Información </button>
                                </Link>
                            </div>  
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item