// Carta.tsx
import React from 'react';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap';

interface Gorosei {
  nombre: string;
  apariencia: string;
  ID:number;
  HakiDelConquistador: boolean;
}

interface CartaProps {
  gorosei: Gorosei;
}

const Carta: React.FC<CartaProps> = ({ gorosei }) => {
  return (
    <Container>

      <Card className="text-center align-self-baseline">
        <Card.Body >
          
          <Card.Img />
          <img className="w-50" src={gorosei.apariencia} />
          <Card.Title><h1>{gorosei.nombre}</h1></Card.Title>
          <Card.Text>
          <h2>Haki del Conquistador: {gorosei.HakiDelConquistador ? "Sí" : "desconocido"}</h2>
          <h2>ID: {gorosei.ID}</h2>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>


  );
};

export default Carta;