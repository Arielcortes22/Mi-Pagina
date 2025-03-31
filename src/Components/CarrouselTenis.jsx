import React from 'react'
import {Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
/* import SueterLv from "../img/SueterLv.webp"; */
import Tenis from "../img/Tenis.avif";
import TenisArriba from "../img/TenisArriba.avif";
import TenisAtras from "../img/TenisAtras.webp";
import TenisSuela from "../img/TenisSuela.avif";
function CarrouselTenis() {
  return (
    <div id='CarrouselTenis'>
      <Carousel className='carrousel2'>
      <Carousel.Item>
      <Link to="/Pagar">
        <Image className='Tenis' src={Tenis}/>
        </Link>
        <Carousel.Caption>
         {/* Aqui se puede agregar un texto */} 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/Pagar">
      <Image className='Tenis' src={TenisArriba}/>
      </Link>
        <Carousel.Caption>
         {/* Aqui se puede agregar un texto */}  
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/Pagar">
          <Image className='Tenis' src={TenisAtras} />
        </Link>
        <Carousel.Caption>
       {/* Aqui se puede agregar un texto */}         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/Pagar">
        <Image className='Tenis' src={TenisSuela}/>
        </Link>
        <Carousel.Caption>
         {/* Aqui se puede agregar un texto */} 
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='textodeSueter'>
      <h3>Tenis</h3>
      <h3>Precio : $1500</h3>
    </div>
    </div>
  )
}

export default CarrouselTenis
