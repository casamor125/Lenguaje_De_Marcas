import React from "react";
import { filas } from "./Fila";

function Tabla(){

    const filasJSX = [];

    for (let index = 0; index < filas.length; index++) {
        const element = filas[index];
        filasJSX.push(
        <tr>
            <td>{element.cantidad}</td>
            <td>{element.producto}</td>
            <td>{element.precio}</td>
            <td>{element.tienda}</td>
            <td>{element.notas}</td>
            <td>{element.comprado}</td>
            <td><img src={element.imagen} alt={element.imagen} /></td>   
        </tr>
        );
    }
    return (
        <table>
          <tbody>
            {filasJSX}
          </tbody>
        </table>
      );
}
export default Tabla;