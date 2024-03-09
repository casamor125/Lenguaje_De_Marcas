import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import foto from "./p1.jpeg";

function Inici(){
    return(

            
            <div className="d-flex flex-row align-self-center">
                <div className="w-50">
                <h2 className="text-center mt-3">Guias Mallorca</h2>
                <p className="text-center mt-3">Nuestra guia Turística de malloraca proporciona Los mejores hoteles de la isla con las mejores actividades, así como los puntos de interes de la isla y los restaurantes crecanos</p>
                </div> 
                <div className="w-50 text-center mt-3 ">
                    <img className="rounded" src={foto} alt="" />
                    
                </div>
            </div>
            
        

    );
}
export default Inici;