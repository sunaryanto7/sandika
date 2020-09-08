import { createContext } from 'react';
import { withTranslation } from '@environment/i18n';

const I18NContext = createContext();


// PROVIDER
const I18NContextProvider = ({ t, i18n, children }) => {
    return (
        <I18NContext.Provider value={{ t, i18n }}>
            {children}
        </I18NContext.Provider>
    );
};


export { I18NContext };
export default withTranslation()(I18NContextProvider);