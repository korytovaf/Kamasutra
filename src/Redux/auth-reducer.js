import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};


const authReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {

        case SET_USER_DATA: {
            stateCopy = action.payload;
            return stateCopy;
        }

        default:
            return state;
    }
};


export const setAuthUserData = (id, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
});

export const getAuthUser = (data) => {
    return (dispatch) => {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
    }
}


export const login = (email, password, rememberMe) => {
    return (dispatch) => {

        authAPI.Login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUser()) //отправляем запрос о том кто залогинился
            }
            else {
                let messages = data.messages.length > 0 ? data.messages[0] : 'Error'
                dispatch(stopSubmit('login', {_error: messages}));
            };
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.Logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}


export default authReducer;