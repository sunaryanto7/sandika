import { createContext } from 'react';
const AppContext = createContext();


// PROVIDER
const AppContextProvider = ({ children }) => {
    const ctx = {
        'host': 'http://localhost:3000/',
        'graphqlHost': 'http://localhost:9200',
        'lang': 'id',
        'port': '3000',
        'config': {
            'imageSlider': {
                'autoPlay': true,
                'items': 1,
                'dots': false,
                'nav': false,
                'stagePadding': 20,
                'loop': true,
                'margin': 10
            },
            'productSlider': {
                'autoPlay': true,
                'items': 2,
                'dots': false,
                'nav': false,
                'stagePadding': 0,
                'loop': true,
                'margin': 15
            }
        }
    }

    return (
        <AppContext.Provider value={{ ...ctx }}>
            {children}
        </AppContext.Provider>
    );
};


export { AppContext, AppContextProvider };