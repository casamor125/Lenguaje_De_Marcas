import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import goroseiData from "./gorosei.json";
import Carta from './Carta';

interface Gorosei {
  nombre: string;
  apariencia: string;
  ID: number;
  HakiDelConquistador: boolean;
}

const App: React.FC = () => {
  const [goroseiData, setGoroseiData] = useState<Gorosei[]>([]);

  useEffect(() => {
    import('./gorosei.json').then((data: { default: Gorosei[] }) => {
      setGoroseiData(data.default);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="text-center mt-5 mb-4">Componentes del Gorosei</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {goroseiData.map((gorosei, index) => (
          <div key={index} className="m-3">
            <Carta gorosei={gorosei} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
