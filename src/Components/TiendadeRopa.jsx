import React from 'react'
import { Link } from 'react-router-dom'
import Cardproduct from './Cardproduct'
import '../Styles.css/tiendas.css'
import Carrousel from './Carrousel'
import CarrouselTenis from './CarrouselTenis'






function TiendadeRopa() {


  return (
    <div className='Container'>
      <div className='botonrojo'>
    <Link to ="/PagP" >  <button class="btn-class-name"> 
  <span class="back"></span>
  <span class="front"></span>
</button>
</Link>
      </div>
    
  
       {/* <Cardproduct />  */} 
       <Carrousel/>
       <CarrouselTenis/>

    </div>
  )
}

export default TiendadeRopa
