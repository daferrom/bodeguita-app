import React, { useContext } from 'react';
import { AppContext } from '../application/provider';

const ShowState = () => {
  const [state, setState] = useContext(AppContext);
  return ( 
      <div>
         <p>{state.name}</p>
         <p>{state.adress}</p> 
  </div>
  );
}

export default ShowState;