import React from "react";
import foto from "./p1.jpeg";

function Restaurants(){
    return(
        <div className="d-flex flex-row justify-content-between">
        <div className="card m-5" >
            <img src={foto} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        </div>
        <div className="card m-5" >
            <img src={foto} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        </div>
        <div className="card m-5" >
            <img src={foto} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        </div>
        
    </div>

    );
}
export default Restaurants;