import React, { useState, useEffect } from "react";
import RazaDetalles from "./RazaDetalles";
import Form from 'react-bootstrap/Form';
import FormSelect from 'react-bootstrap/FormSelect';

export type Razas = Raza[];

export interface Raza {
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

export interface Weight {
  imperial: string;
  metric: string;
}

export interface Height {
  imperial: string;
  metric: string;
}

const Raza = () => {
  const [razas, setRazas] = useState<Razas>([]);
  const [selectRazaId, setSelectRazaId] = useState<string>();

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "x-api-key": "123456",
      },
    })
      .then((response) => response.json())
      .then((data: Razas) => {
        setRazas(data);
      });
  }, []);

  const handleRazaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectRazaId(event.target.value);
  };

  return (
    <div className="">
      <h1 className="position-relative">Razas</h1>

      <Form.Select size="lg" value={selectRazaId} onChange={handleRazaChange}>
        <option value="">Selecciona una raza</option>

        {razas.map((raza) => (
          <option key={raza.id} value={raza.id}>
            {raza.name}
          </option>
        ))}
      </Form.Select >

      {selectRazaId && <RazaDetalles id={selectRazaId} />}

    </div>
  );
};

export default Raza;