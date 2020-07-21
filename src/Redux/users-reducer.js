const MAKE_FRIEND = 'MAKE-FRIEND';
const NOT_FRIEND = 'NOT-FRIEND';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 100,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case MAKE_FRIEND:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            };

        case NOT_FRIEND:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }

        case SET_USERS:
            return {
                ...state, users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage,
            }

        case SET_TOTAL_COUNT:
            return {
                ...state, totalCount: action.totalCount,
            }

        default:
            return state;
    }
};


export const makeFriend = (userId) => ({ type: MAKE_FRIEND, userId });
export const notFriend = (userId) => ({ type: NOT_FRIEND, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });

export default usersReducer;