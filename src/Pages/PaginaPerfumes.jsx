import React from 'react';
import TiendaDePerfumes from '../Components/TiendaDePerfumes';
import TiendadePerfumesMujer from '../Components/TiendadePerfumesMujer';
import '../Styles.css/Perfumes.css';
import BotonAtras from '../Components/BotonAtras';

function PaginaDePerfumes() {
  return (
    <div >
      <div className="carruseles-container">
        <BotonAtras />
      <TiendaDePerfumes />
      <TiendadePerfumesMujer />
      </div>
    </div>
  );
}

export default PaginaDePerfumes;
