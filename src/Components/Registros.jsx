import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Llamados from '../../Services/Llamados';


function Registros() {

  const [nombreUsuario,SetNombreUsuario]= useState ()
  const [passwordUsuario,SetPasswordUsuario] = useState()
  const [TargetaUsuario,SetTargetaUsuario] = useState()

  function nombre(evento) {
    SetNombreUsuario(evento.target.value)
    console.log(nombreUsuario);
  }

  function Contraseña(evento) {
    SetPasswordUsuario(evento.target.value)
    console.log(passwordUsuario);
    
  }
  function Targeta(evento) {
    SetTargetaUsuario(evento.target.value)
    console.log(TargetaUsuario);
    
  }


function Enviardatos() {
  console.log("click");
  
  Llamados.PostUsers(nombreUsuario,passwordUsuario,TargetaUsuario)
}




  return (
    <div id='Registros'>

      <div className='data'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label> <br />
        <Form.Control value={nombreUsuario} onChange={nombre}  type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
    
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Targeta</Form.Label> <br />
        <Form.Control value={TargetaUsuario} onChange={Targeta} min="9" max="9" type="Number" placeholder="Digita tu Targeta" />
        <Form.Text className="text-muted">
    
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label> <br />
        <Form.Control value={passwordUsuario} onChange={Contraseña} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Link to="/Login"> <Button  onClick={Enviardatos} variant="primary">
        Registrarse
      </Button>
      </Link>
      </div>

    </div>
  )
}

export default Registros