const MAKE_FRIEND = 'MAKE-FRIEND';
const NOT_FRIEND = 'NOT-FRIEND';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {id: 1, login: 'kriss', name: 'Кристина', status: 'Привет привет', friend: true, avatar: 'https://i.pinimg.com/originals/9b/3c/7d/9b3c7dd154bc520f94abac83acda0d59.jpg'},
        {id: 2, login: 'alena', name: 'Алена', status: 'Скоро буду', friend: false, avatar: 'https://i.pinimg.com/originals/9b/3c/7d/9b3c7dd154bc520f94abac83acda0d59.jpg'},
    ],
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case MAKE_FRIEND:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, friend: true}
                    }
                    return user
                })
            };

        case NOT_FRIEND:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, friend: false}
                    }
                    return user
                })
            }

        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
};


export const makeFriend = (userId) => ({
    type: MAKE_FRIEND,
    userId
});


export const notFriend = (userId) => ({
    type: NOT_FRIEND,
    userId
});


export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
});

export default usersReducer;