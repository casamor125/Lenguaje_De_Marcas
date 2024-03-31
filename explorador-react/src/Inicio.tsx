import React from "react";
import Card from "react-bootstrap/Card";

const Inicio = () => {
  return (
    <>
      <div className="text-center">
        <h1>
          Bienvenido a nuestro explorador dedicado a TODAS las diferentes razas de perros.
        </h1>
      </div>

      <div className="d-flex flex-row justify-content-between">
        <div className="card m-5" >
          <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..."></img>
          <div className="card-body">

            <h2 className="card-text text-center">Pero si es que mira que monos que son.</h2>
          </div>
        </div>
        <div className="card m-5" >
          <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..."></img>
          <div className="card-body">

            <h2 className="card-text text-center">Para no dedicarles una pagina entera.</h2></div>
        </div>
        <div className="card m-5" >
          <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..."></img>
          <div className="card-body">

            <h2 className="card-text text-center">Y mas siendo nuestros mejores amigos.</h2></div>
        </div>

      </div>

    </>
  );
};

export default Inicio;