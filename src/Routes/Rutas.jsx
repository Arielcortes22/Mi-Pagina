import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Regis from '../Pages/Regis';
import PagP from '../Pages/PagP';
import Pag2 from '../Pages/Pag2';

function Rutas() {
  return (
    <div>
       <Router>
        <Routes>
      
                        

                           
                            <Route path="/Login" element={<Login/>}/>   
                           <Route path="/Registrer" element={<Regis/>}/>   
                              <Route path="/PagP" element={<PagP/>}/> 
                              <Route path="/Pag2" element={<Pag2/>}/> 
                               


                      
                            
        </Routes>
      </Router>
      
    </div>
  )
}

export default Rutas
