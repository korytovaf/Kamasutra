import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const DELETE_POST = 'DELETE-POST';
const SET_PHOTO_AVATAR = 'SET-PHOTO-AVATAR';

let initialState = {
    postsData: [
        {id: 1, login: 'admin', post: 'Привет, это мой первый пост', like: 0, date: '21/05/2019 18:00'},
        {id: 2, login: 'admin', post: 'Привет, это мой второй пост', like: 0, date: '21/05/2019 18:00'},
        {id: 3, login: 'admin', post: 'Третий пост', like: 20, date: '17/07/2020 22:00'},
    ],
    profile: null,
    status: 'Добавьте статус...',
};


const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case ADD_POST: {
            const getDataString = () => new Date().toLocaleString('ru-RU')
            let newPost = {
                id: 11,
                login: 'admin',
                post: action.addNewPost,
                date: getDataString()
            };
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            return stateCopy;
        }
        case DELETE_POST: {
            return {...state, postsData: state.postsData.filter(p => p.id !== action.id)}
        }

        case SET_USER_PROFILE: {
            stateCopy.profile = action.profile
            return stateCopy;
        }

        case SET_USER_STATUS: {
            stateCopy.status = action.status
            return stateCopy;
        }

        case SET_PHOTO_AVATAR: {
            return {...state, profile: {...state.profile, photos: action.photos}};
        }

        default:
            return state;
    }
};



export const addPost = (addNewPost) => ({type: ADD_POST, addNewPost});
export const deletePost = (id) => ({type: DELETE_POST, id});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const setPhotoAvatar = (photos) => ({type: SET_PHOTO_AVATAR, photos});



export const getProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data));
}

export const getUserStatus = (userID) => async (dispatch) => {
    let status = await profileAPI.getStatus(userID)
    dispatch(setUserStatus(status))
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhotoAvatar = (file) => async (dispatch) => {
    let response = await profileAPI.savePhotoAvatar(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhotoAvatar(response.data.data.photos))
    }
}

export default profileReducer;