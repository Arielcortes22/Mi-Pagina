import React from 'react'
import {Carousel, Image } from 'react-bootstrap';
 import '../Styles.css/Perfumes.css'; 
import { Link } from 'react-router-dom';
import PerfumeMujer from "../img/Perfumemujer.jpg";
import PerfumeMujer1 from "../img/Perfumemujer2.avif";

function TiendadePerfumesMujer() {
    console.log("El componente TiendadePerfumesMujer se está renderizando");
  
    return (
      <div>
        <Carousel className="perfumeMujerOp">
          <Carousel.Item>
            <Link to="/Pagar">
              <Image className="PerfumeMujer" src={PerfumeMujer} />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/Pagar">
              <Image className="PerfumeMujer" src={PerfumeMujer1} />
            </Link>
          </Carousel.Item>
        </Carousel>
        <div className='textodePerfume'>
      <h3>LA VIE EST BELLE IRIS ABSOLU</h3>
      <h3>Precio :100.000</h3>
    </div>
      </div>
    );
  }

export default TiendadePerfumesMujer
