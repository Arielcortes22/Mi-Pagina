import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles.css/BotonAtras.css'; 

function BotonAtras() {
  return (
    <div>
         <div className="botonrojo">
        <Link to="/PagP">
          <button className="btn-class-name">
            <span className="back"></span>
            <span className="front"></span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BotonAtras
