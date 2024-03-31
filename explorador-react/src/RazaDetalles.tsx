import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';
export type DetallesRazas = DetallesRaza[];

export interface DetallesRaza {
  weight: Weight;
  height: Height;
  id: number;
  name: string;
  bred_for?: string;
  breed_group?: string;
  life_span: string;
  temperament?: string;
  origin?: string;
  reference_image_id: string;
  country_code?: string;
  description?: string;
  history?: string;
}
// esto lo da la api dependiendo que sistema metrico queremos usar 
export interface Weight {
  imperial: string;
  metric: string;
}
export interface Height {
  imperial: string;
  metric: string;
}



export interface RazaDetallesProps {

  id: string;
}


const RazaDetalles = ({ id }: { id: string }) => {
  const [detalleRaza, setDetalleRaza] = useState<DetallesRaza[]>([]);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  // fetch para la imagen 
  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
      headers: {
        "x-api-key": "123456",
      },
    })
      .then((response) => response.json())
      .then((data: DetallesRaza) => {
        setDetalleRaza([data]);
        fetchImage(data.reference_image_id);
      });
  }, [id]);

  //fetch con ifs para saber si la iamgen es .jpg, o .png
  const fetchImage = (imageId: string) => {
    //`` se usa para poner ${variableN}
    fetch(`https://cdn2.thedogapi.com/images/${imageId}`, {
      //El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.
      method: 'HEAD'
    })
      .then((response) => {
        //respuesta que devuelve a la pagina 
        const contentType = response.headers.get('content-type'); // content-type 
        if (contentType && contentType.startsWith('image/png')) { //el && da error por como funciona react
          setImageUrl(`https://cdn2.thedogapi.com/images/${imageId}.png`);
        } else {
          setImageUrl(`https://cdn2.thedogapi.com/images/${imageId}.jpg`);
        }
      });
  };

  return (
    <div className="container-fluid">
      <h1 className="position-relative">Detalles Raza</h1>
      {detalleRaza.map((raza) => (
        <Card className="text-center align-self-baseline" key={raza.id}>
          <Card.Body >
            <Card.Title><h1>{raza.name}</h1></Card.Title>
            <Card.Img />
            {imageUrl && (
              <Image className="img-fluid rounded w-50"
                src={imageUrl}
              />
            )}
            <Card.Text>
              <h2>Life span:</h2> {raza.life_span}
              <h2>Weight:</h2>{raza.weight.metric} kg
              <h2>Heigth:</h2>{raza.height.metric} cm
              <h2>Temperament:</h2> {raza.temperament}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RazaDetalles;