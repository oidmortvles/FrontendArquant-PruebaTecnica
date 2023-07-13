import React from 'react';
import "./Card.css";
import './Fuentes.css';


function Card({title, birth_year, mass, eliminarPersonaje,foto}) {  


  return (


    <div className='card' style={{ width: '18rem' }}>
                <h3 className='card-title'>{title}</h3>
                <img src={foto}  className='imagen' alt="..."></img>  
                
            <div className='card-body'>                
                <p className='card-text'> <span className='texto'>NACIMIENTO</span> </p>
                <p className='card-text'><span className='texto2'>{birth_year}</span> </p>
                <p className='card-text'> <span className='texto'>PESO</span> </p>
                <p className='card-text'><span className='texto2'>{mass}</span> </p>
            </div>

                <div className='d-flex justify-content-center botones'>
                    <button className='buton' onClick={eliminarPersonaje}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-bar-contract" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.646 14.854a.5.5 0 0 0 .708 0L8 11.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zm0-13.708a.5.5 0 0 1 .708 0L8 4.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zM1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8z"/>
                    </svg>

                    </button>
                                      
                </div>
            
  </div>
)
}

export default Card