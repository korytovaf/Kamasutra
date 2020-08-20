import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_AUTH_PROFILE_MI = 'auth/SET-AUTH-PROFILE-MI';
const SET_CAPTCHA_URL = 'auth/SET-CAPTCHA-URL';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    profileMi: null,
    captcha: null,
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {
            return {...state,
                id: action.payload.id,
                login: action.payload.login,
                email: action.payload.email,
                isAuth: action.payload.isAuth,
                captcha: action.payload.captcha,
            };
        }

        case SET_AUTH_PROFILE_MI: {
            return {...state, profileMi: action.profileMi};
        }

        case SET_CAPTCHA_URL: {
            return {...state, captcha: action.url};
        }

        default:
            return state;
    }
};


export const setAuthUserData = (id, login, email, isAuth, captcha) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth, captcha}
});


export const setAuthProfileMi = (profileMi) => ({
    type: SET_AUTH_PROFILE_MI,
    profileMi
});

export const setCaptchaUrl = (url) => ({
    type: SET_CAPTCHA_URL,
    url
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
    }
}


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const data = await authAPI.Login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(getAuthUser()) //отправляем запрос о том кто залогинился
    } if (data.resultCode === 10) {
        dispatch(getCaptcha());
    } else {
        const messages = data.messages.length > 0 ? data.messages[0] : null;
        dispatch(stopSubmit('login', {_error: messages}));
    }
}


export const logout = () => async (dispatch) => {
    let data = await authAPI.Logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, null ))
        dispatch(setAuthProfileMi(null))
    }
}


export const getCaptcha = () => async (dispatch) => {
    let data = await authAPI.captcha();
    dispatch(setCaptchaUrl(data.url));
}


export default authReducer;