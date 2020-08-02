import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_LOGIN = 'SET-LOGIN';

let initialState = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    isAuth: false,
    login: null,
};


const authReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {

        case SET_USER_DATA: {
            stateCopy.data = action.data;
            stateCopy.isAuth = true;
            return stateCopy;
        }

        case SET_LOGIN: {
            stateCopy.login = action.userId;
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

export const setLogin = (userId) => ({
    type: SET_LOGIN,
    userId
});


export const getAuthUser = (data) => {
    return (dispatch) => {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
    }
}

export const getAuthLogin = (data) => {
    return (dispatch) => {
        authAPI.loginAuth().then(data => {
            if (data.resultCode === 0) {
                let { userId } = data.login
                dispatch(setLogin(userId))
            }
        })
    }
}

export default authReducer;