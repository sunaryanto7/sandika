import { createContext } from 'react';

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
const AppContextProvider = ({ value, children }) => {
  return (
    <>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export { AppContext };
export default AppContextProvider;
