import { createContext, useState } from 'react';
import { withTranslation } from '@sandika_environment/i18n';
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
const AppContextProvider = ({ t, i18n, children }) => {
  const [state, setState] = useState({});

  return (
    <>
      <AppContext.Provider value={{ store, t, i18n, state, setState }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export { AppContext };
export default withTranslation()(AppContextProvider);
