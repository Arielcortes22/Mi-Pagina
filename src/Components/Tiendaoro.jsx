import React from 'react'
import { Card,Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Cadena from '../img/cadena.webp';
import Anillo from '../img/anillo.jpg';
import Pulsera from '../img/pulsera.jpg';
import '../styles.css/oro.css'
function Tiendaoro() {
  return (
    <div>
        <Card className='container'>
                <Card.Header> <h3 className='text'> cadena de oro</h3> </Card.Header>
                <Card.Body>
                <Link to="/Pagar">  <Card.Img className='Cadenaoro' src={Cadena}/> </Link>
                    <Card.Title className='text'>oro hueca de 30 gramos,destellos de oro blanco</Card.Title>
                    <Card.Text className='text'>Precio:1.000000</Card.Text>
                </Card.Body>
                  </Card>
                  {/* 2 */}
        <Card className='container'>
                <Card.Header> <h3 className='text'>anillo</h3> </Card.Header>
                <Card.Body>
                <Link to="/Pagar"> <Card.Img className='Anillodeoro' src={Anillo}/> </Link>
                    <Card.Title className='text'>anillo de 20 gramos/Perla verde</Card.Title>
                    <Card.Text className='text'>Precio:500.000</Card.Text>
                </Card.Body>
                  </Card>
        <Card className='container'>
                <Card.Header> <h3 className='text'>Pulsera</h3> </Card.Header>
                <Card.Body>
                   <Link to="/Pagar"> <Card.Img className='Puseradenalines' src={Pulsera}/> </Link>
                    <Card.Title className='text'>Pulsera de balines de oro,Con dije de muerte</Card.Title>
                    <Card.Text className='text'>Precio:100.000</Card.Text>
                </Card.Body>
                  </Card>
    </div>
  )
}

export default Tiendaoro
