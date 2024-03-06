import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import foto from "./p1.jpeg";

function Inici(){
    return(
        <div className ="flex-column" >
            
            <div className="d-flex flex-row align-self-center">
                <div >
                <h2>Guias Mallorca</h2>
                <p>Nuestra guia Turística de malloraca proporciona Los mejores hoteles de la isla con las mejores actividades, así como los puntos de interes de la isla y los restaurantes crecanos</p>
                </div> 
                <div >
                    <img src={foto} alt="" />
                    
                </div>
            </div>
            <div className="align-self-center"> <p>pepe</p></div>
        </div>

    );
}
export default Inici;