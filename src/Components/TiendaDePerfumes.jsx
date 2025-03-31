import React from 'react'
import {Carousel, Image } from 'react-bootstrap';
import '../Styles.css/Perfumes.css';
import { Link } from 'react-router-dom';
import khamrah from "../img/Khamarh.jpeg";
import Khamrah1 from "../img/Kharahlado.jpeg";


function TiendaDePerfumes() {
  return (
    <div>
        <Carousel className='carrousel2'>
      <Carousel.Item>
      <Link to="/Pagar">
        <Image className='Perfume' src={khamrah}/>
        </Link>
        <Carousel.Caption>
         {/* Aqui se puede agregar un texto */} 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/Pagar">
      <Image className='Perfume' src={Khamrah1}/>
      </Link>
        <Carousel.Caption>
         {/* Aqui se puede agregar un texto */}  
        </Carousel.Caption>
      </Carousel.Item>
      {/* 2 */}
      
    </Carousel>
     
    <div className='textodePerfume'>
      <h3>Khamrah lattafa</h3>
      <h3>Precio :28.000</h3>
    </div>
    </div>
  )
}

export default TiendaDePerfumes
