import React, { useContext } from 'react';
import { AppContext } from '../application/provider';

const ShowState = () => {
  const [state, setState] = useContext(AppContext);
  return ( 
      <div>
         <p>Hola &nbsp;{state.name}&nbsp;</p>
         <p>elige lo que necesites entre nuestros combos y lo enviaremos a tu 
         direccion: {state.adress}
        </p> 
  </div>
  );
}

export default ShowState;