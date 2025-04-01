import React  from 'react'
import '../Styles.css/PaginaPrincipalStyle.css'
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Oro from '../img/Tienda de oro.jpg'
import Perfumes from '../img/Perfumes.jpg'
import Ropa from '../img/Ropa.jpeg'

//import Form from 'react-bootstrap/Form';


function PaginaPrincipal() {






  return (
    <div id='PaginaPrincipal'>
           {/*  <Link to ='/http://localhost:5173/Login'> <Button className='btn-ir'>Registrarse</Button></Link> */}
     <h1> Micro emprendemientos y autoempleos</h1>
     


    <Card className='Estructura'>{/* 0 */}
  
  

    {/* 2 */}
    <Card className='Numero2'>
<Card.Header> <h3 className='TextoOro'>Oro</h3> </Card.Header> 
  <br />
  <Card.Body>
  <Link to="/Oro">   <Card.Img className='Oroimg' src={Oro}/> </Link>
  
 </Card.Body> 

  </Card> {/* 2 */}

  {/* 3 */}
  <Card className='Card-tres'>
  <Card.Header> <h3 className='TextoPerfumes'>Perfumes</h3> </Card.Header>
  <br />
 <Card.Body>
  <Link to="/Perfumes" > <Card.Img className='Perfumeimg' src={Perfumes}/> </Link> 
  </Card.Body> 

  </Card>{/* 3 */}
<Card className='Card-cuatro'>
  <Card.Header> <h3 className='TextoRopa'>Ropa</h3> </Card.Header>
  <Card.Body>
  <Link to ='/Ropa'>  <Card.Img  className='Ropaimg' src={Ropa}/></Link> 
  </Card.Body>
  </Card>
  </Card>  {/* 0 */}

  <div>
    <Card.Footer> <h1>Informacion </h1></Card.Footer>
    <Card.Footer> <h4>Creador :Ariel Cortes </h4></Card.Footer>
    <Card.Footer> <h4>Telefono :(506) 6145 0362 </h4></Card.Footer>
    <Card.Footer> <h4>Correo :  arichango0107@gmail.com </h4></Card.Footer>
 
  </div>
   
    </div>
    
  )
}

export default PaginaPrincipal