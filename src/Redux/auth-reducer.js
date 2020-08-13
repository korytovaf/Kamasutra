import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_AUTH_PROFILE_MI = 'auth/SET-AUTH-PROFILE-MI';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    profileMi: null,
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {
            return {...state,
                id: action.payload.id,
                login: action.payload.login,
                email: action.payload.email,
                isAuth: action.payload.isAuth,
            };
        }

        case SET_AUTH_PROFILE_MI: {
            return {...state, profileMi: action.profileMi};
        }

        default:
            return state;
    }
};


export const setAuthUserData = (id, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
});


export const setAuthProfileMi = (profileMi) => ({
    type: SET_AUTH_PROFILE_MI,
    profileMi
});


export const getAuthProfileMi = (userId) => async (dispatch) => {
    let profileMi = await profileAPI.getProfile(userId);
    dispatch(setAuthProfileMi(profileMi))
}


export const getAuthUser = () => async (dispatch) => {
    let data = await authAPI.getAuth();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, login, email, true))
        // dispatch(getAuthProfileMi(id))
    }
}


export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.Login(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(getAuthUser()) //отправляем запрос о том кто залогинился
    } else {
        let messages = data.messages.length > 0 ? data.messages[0] : 'Error'
        dispatch(stopSubmit('login', {_error: messages}));
    }
}


export const logout = () => async (dispatch) => {
    let data = await authAPI.Logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer;