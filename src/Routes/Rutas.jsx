import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Regis from '../Pages/Regis';
import PagP from '../Pages/PagP';
import Pag2 from '../Pages/Pag2';
import Ropa from '../Pages/Ropa';
import AcercaPag from '../Pages/AcercaPag';
import ContactoPag from '../Pages/ContactoPag';
import PagarPag from '../Pages/PagarPag';
import AdminPag from '../Pages/AdminPag';
import PaginaPerfumes from '../Pages/PaginaPerfumes';
import PagServicios from '../Pages/PagServicios';
import OroPag from '../Pages/oroPag';

function Rutas() {
  return (
    <div>
       <Router>
        <Routes>
      
                        

                           
                            <Route path="/Login" element={<Login/>}/>   
                           <Route path="/Registrer" element={<Regis/>}/>   
                              <Route path="/PagP" element={<PagP/>}/> 
                              <Route path="/Pag2" element={<Pag2/>}/> 
                              <Route path="/Ropa" element={<Ropa/>}/>
                              <Route path="/Informacion" element={<AcercaPag/>}/>
                              <Route path="/Contacto" element={<ContactoPag/>}/>
                              <Route path="/Pagar" element={<PagarPag/>}/>
                              <Route path="/Admin" element={< AdminPag/>}/>
                              <Route path="/Perfumes" element={<PaginaPerfumes/>}/>
                              <Route path="/Servicios" element={<PagServicios/>}/>
                              <Route path="/Oro" element={<OroPag/>}/>

                               


                      
                            
        </Routes>
      </Router>
      
    </div>
  )
}

export default Rutas
