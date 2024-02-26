import React from "react";
import { filas } from "./Lista";
import Fila from "./Fila"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';



function Tabla() {

    return (
        <Table striped bordered hover variant="dark">
            {filas.map((element, index) => {
                return <Fila element={element} />
            })}
        </Table>
    );
}
export default Tabla;