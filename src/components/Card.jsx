import React from 'react';
import "./Card.css";

function Card() {
  return (
    <div className='card' style={{ width: '15rem' }}>
        <img src="https://img.ecartelera.com/sagas/000/9.jpg"  className='card-img-top' alt="..."></img>
            <div className='card-body'>
                <h4 className='card-title'>Card title</h4>
                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <div className='d-flex justify-content-center'>

                    <button href="#" className='btn btn-primary btn-sm'>Delete</button>
                    <button href="#" className='btn btn-primary btn-sm'>Editar</button>

                </div>
            </div>
  </div>
)
}

export default Card