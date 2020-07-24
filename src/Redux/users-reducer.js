const MAKE_FRIEND = 'MAKE-FRIEND';
const NOT_FRIEND = 'NOT-FRIEND';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
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

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching,
            }
        default:
            return state;
    }
};


export const makeFriend = (userId) => ({ type: MAKE_FRIEND, userId });
export const notFriend = (userId) => ({ type: NOT_FRIEND, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;