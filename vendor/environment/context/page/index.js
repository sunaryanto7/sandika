import { createContext } from 'react';

/* 
@@
@@  INITIATE CONTEXT
@@  
*/
const PageContext = createContext();

/* 
@@
@@  INITIATE CONTEXT PROVIDE VALUE
@@  
*/
const PageContextProvider = ({ value, children }) => {
  return (
    <>
      <PageContext.Provider value={value}>
        {children}
      </PageContext.Provider>
    </>
  );
};

export { PageContext };
export default PageContextProvider;
