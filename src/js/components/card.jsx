import React from "react";

const Card = () => {
    return (
        <div>
            {/* // style={{marginRight: spacing + 'em'}}  */}
            
            <div className="card" style={{width: '18rem'}}>
                <img src="https://img.asmedia.epimg.net/resizer/v2/UDSICW5LJRDRTA6X4PG3FH3T64.jpg?auth=da022ed3eef539abbd48865720b51e8cebe3ef04ac33b7f86737f07a18b81a57&width=1472&height=828&smart=true" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Proximamente FF7 Rebirth este 9 de Marzo</h5>
                        <p className="card-text">Final Fantasy VII Rebirth es una pelicula de acción, desarrollado y publicado por Square Enix.</p>
                        <a href="#" className="btn btn-primary">Compra tu Entrada</a>
                    </div>
            </div>
        </div>
    )
}

export default Card