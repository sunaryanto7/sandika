import { createContext, useState } from 'react';
import store from '@sandika_environment/context/view';

/* 
@@
@@  INITIATE CONTEXT
@@  
*/
const AppContext = createContext();

/* 
@@
@@  INITIATE CONTEXT PROVIDE VALUE
@@  
*/
const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <>
      <AppContext.Provider value={{ store, state, setState }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export { AppContext };
export default AppContextProvider;
