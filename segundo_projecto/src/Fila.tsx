import React from "react";

function Fila({ element }: { element: { producto: string; cantidad: number; precio: number; tienda: string; notas: string; comprado: boolean; imagen: string; } }) {
    return (
        <tr>
            <td>{element.cantidad}</td>
            <td>{element.producto}</td>
            <td>{element.precio}</td>
            <td>{element.tienda}</td>
            <td>{element.notas}</td>
            <td>{element.comprado}</td>
            <td><img src={element.imagen} alt={element.producto} width={50} /></td>
        </tr>
    );
}

export default Fila;