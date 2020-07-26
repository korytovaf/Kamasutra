const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    isAuth: false,
};


const authReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {

        case SET_USER_DATA: {
            stateCopy.data = action.data;
            stateCopy.isAuth = true;
            return stateCopy;
        }
        default:
            return state;
    }
};


export const setAuthUserData = (id, login, email) => ({
    type: SET_USER_DATA,
    data: {id, login, email}
});

export default authReducer;