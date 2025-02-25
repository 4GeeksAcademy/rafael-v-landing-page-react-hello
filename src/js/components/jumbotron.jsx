import React from "react";

const Jumbotron = () => {
    return (
        <div className="mb-4 bg-light rounded-3 mx-5 mt-4">
            <div className="container-fluid py-2 text-start">
                <h1 className="display-5 fw-bold">Bienvenido a Mi Sitio Web</h1>
                <p className="col-md-8 fs-4">Esto es un Ejemplo de Pagina Web</p>
                <p>Aqui podras ver informacion y Comprar tus Entradas</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Para leer mas</a>
            </div>
        </div>
    )
}

export default Jumbotron