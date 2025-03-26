import React from 'react'
import {Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SueterLv from "../img/SueterLv.webp";
import SueterLd from "../img/SueterLd.webp";
import SueterBck from "../img/SueterBck.webp";
import "../Styles.css/Carrousel.css";

function Carrousel() {
  return (

      <div id='Carrousel'>
      <Carousel className='carrousel'>
      <Carousel.Item>
      <Link to="/Pagar">
        <Image className='SueterLv' src={SueterLv}/>
        </Link>
        <Carousel.Caption>
         {/* Aqui se puede agregar un texto */} 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/Pagar">
      <Image className='SueterLv' src={SueterLd}/>
      </Link>
        <Carousel.Caption>
         {/* Aqui se puede agregar un texto */}  
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/Pagar">
          <Image className='SueterLv' src={SueterBck} />
        </Link>
        <Carousel.Caption>
       {/* Aqui se puede agregar un texto */}         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='textodeSueter'>
      <h3>Sueter</h3>
      <h3>Precio : $5000</h3>
    </div>
    </div>
    
    



  )
}

export default Carrousel
