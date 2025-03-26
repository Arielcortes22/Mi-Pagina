import React from 'react'
import '../styles.css/NavBarStyle.css';

function Navbar() {
  return (
    <div id='Navbar'>
      <div className='navbar'>
            <nav className='Ok'>

<ul className='lista'>
  <li><a href="http://localhost:5173/PagP">Productos</a></li>
  <li><a href="#Service">Servicios</a></li>
  <li><a href="http://localhost:5173/Pagar">Pagar</a></li>
  <li><a href="http://localhost:5173/Contacto">Contacto</a></li>
  <li><a href="http://localhost:5173/Informacion">Acerca</a></li>

  
</ul>
</nav>
</div>
    </div>
  )
}

export default Navbar
