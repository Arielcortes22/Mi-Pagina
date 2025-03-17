import React  from 'react'
import '../Styles.css/PaginaPrincipalStyle.css'
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Logo from '../img/software.jpeg'
import Oro from '../img/Tienda de oro.jpg'
import Perfumes from '../img/Perfumes.jpg'

//import Form from 'react-bootstrap/Form';


function PaginaPrincipal() {






  return (
    <div>
     <h1> Micro emprendemientos y autoempleos</h1>
     
      <a className='ButtonInit' href="http://localhost:5173/Pag2"><button>Iniciar</button></a>

    <Card className='Estructura'>{/* 0 */}
    {/* 1 */}
      <Card className='Card'>
        
  <Card.Header>Software</Card.Header>
  <Card.Body>
    <Button className='btn-ir'>Ir</Button>
  <Card.Img className='Softwareimg' src={Logo}/>
    </Card.Body>
      </Card>{/* 1 */}

    {/* 2 */}
    <Card className='Numero2'>
  <Card.Header>Oro</Card.Header>
  <Card.Body>
  <Button className='btn-enviar'>Ir</Button>
    <Card.Img className='Oroimg' src={Oro}/>
  
 </Card.Body> 

  </Card> {/* 2 */}

  {/* 3 */}
  <Card className='Card-tres'>
  <Card.Header>Perfumes</Card.Header>
 <Card.Body>
  <Button className='Btn-tres'>Ir</Button>
    <Card.Img className='Perfumeimg' src={Perfumes}/>
  </Card.Body> 

  </Card>{/* 3 */}


  </Card>  {/* 0 */}
   
    </div>
  )
}

export default PaginaPrincipal