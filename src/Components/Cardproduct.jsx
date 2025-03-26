import React from 'react'
import { Card } from 'react-bootstrap';
import SueterLv from '../img/SueterLv.webp'

function Cardproduct() {
  return (

      
      <Card className='cardRopa'>
                <Card.Header> <h3>Camisa</h3> </Card.Header>
                <Card.Body>
                    <Card.Img className='SueterLv' src={SueterLv}/>
                    <Card.Title className='TextoSueter'>Sueter lv</Card.Title>
                    <Card.Text className='Precio'>Precio: $500.00</Card.Text>
                </Card.Body>
                  </Card>


  )
}

export default Cardproduct
