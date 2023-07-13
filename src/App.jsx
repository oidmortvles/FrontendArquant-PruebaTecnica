import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/Card';
import Carga from './components/Carga';
import Titulo from './components/Titulo';
import Fotos from './components/Fotos';

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    obtenerDatos()
      .then(arrayDatos => {
        setPersonajes(arrayDatos);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const obtenerDatos = async () => {
    try {
      const respuesta = await fetch('https://swapi.dev/api/people');
      const promesaArrayDatos = await respuesta.json();
      const arrayDatos = await promesaArrayDatos.results;
      return arrayDatos;
    } catch (error) {
      throw new Error('Error al obtener los datos:', error);
    }
  };


  const eliminarPersonaje = (index) => {
    const nuevosPersonajes = personajes.filter((_, i) => i !== index);
    setPersonajes(nuevosPersonajes);
  };

  let tituloMostrar;

  if(personajes.length > 0){
    tituloMostrar= <Titulo/>
  }

  
  return (
    
    <div className="d-flex flex-wrap container justify-content-center">
           
           {tituloMostrar}

        <div className="d-flex flex-wrap container justify-content-center">    

            {personajes.length > 0 ? (
              personajes.map((personaje, index) => (
                <Card key={index} 
                      title={personaje.name} 
                      birth_year={personaje.birth_year} 
                      mass={personaje.mass}
                      eliminarPersonaje={() => eliminarPersonaje(index)}
                      foto={Fotos[index].img}
                  />
              ))
            ) : (
              <Carga/>
            )}  
            
        </div>


    </div>
  );
}

export default App;
