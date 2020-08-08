import {getAuthUser} from "./auth-reducer";

const INITIALIZATION_SUCCESS = 'INITIALIZATION-SUCCESS';

let initialState = {
    initial: false,
};


const appReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {

        case INITIALIZATION_SUCCESS: {
            stateCopy.initial = true;
            return stateCopy;
        }

        default:
            return state;
    }
};

export const initializationSuccess = () => ({
    type: INITIALIZATION_SUCCESS
});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUser());
    promise.then(() => {
        dispatch(initializationSuccess());
    })


}

export default appReducer;