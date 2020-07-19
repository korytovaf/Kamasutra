const UPDATE_NEW_POST_TEXT_CHANGE = 'UPDATE-NEW-POST-TEXT-CHANGE';
const ADD_POST = 'ADD-POST';

let initialState = {
    postsData: [
        {id: 1, login: 'admin', post: 'Привет, это мой первый пост', like: 0, date: '21/05/2019 18:00'},
        {id: 2, login: 'admin', post: 'Привет, это мой второй пост', like: 0, date: '21/05/2019 18:00'},
        {id: 3, login: 'admin', post: 'Третий пост', like: 20, date: '17/07/2020 22:00'},
    ],
    newPostText: '',
};


const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case ADD_POST: {
            const getDataString = () => new Date().toLocaleString('ru-RU')
            let newPost = {
                id: 11,
                login: 'admin',
                post: stateCopy.newPostText,
                date: getDataString()
            };
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT_CHANGE: {
            stateCopy.newPostText = action.value;
            return stateCopy;
        }
        default:
            return state;
    }
};


export const updateNewPostTextChange = (value) => ({
    type: UPDATE_NEW_POST_TEXT_CHANGE,
    value: value.currentTarget.value
});


export const addPost = ( id, login, post, data ) => ({
    type: ADD_POST,
    id,
    login,
    post,
    data,
});


export default profileReducer;