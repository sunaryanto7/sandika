import NAVBAR_ACTIONS from '@library/redux/actions/navbar';

function navbarReducers(initialState = [], actions) {
    switch (actions.type) {
        case NAVBAR_ACTIONS:
            console.log('hai');
            console.log(initialState);
            break;

        default:
            break;
    }
}

export default navbarReducers;
