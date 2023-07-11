import React from 'react';
import "./Card.css";

function Card() {
  return (
    <div className='card' style={{ width: '18rem' }}>
    <img src="..." class="card-img-top" alt="..."></img>
    <div className='card-body'>
      <h5 className='card-title'>Card title</h5>
      <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div className='d-flex justify-content-center'>
        <button href="#" className='btn btn-primary btn-sm'>Delete</button>
        <button href="#" className='btn btn-primary btn-sm'>Editar</button>
        <button href="#" className='btn btn-primary btn-sm'>Delete</button>
      </div>
    </div>
  </div>
)
}

export default Card