import {usersAPI} from "../api/api";
import {updateObjectArray} from "../Utils/object-helpers";

const MAKE_FRIEND = 'MAKE-FRIEND';
const NOT_FRIEND = 'NOT-FRIEND';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'


let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case MAKE_FRIEND:
            return { ...state,
                users: updateObjectArray( state.users, action.userId, 'id', {followed: true} )
            };

        case NOT_FRIEND:
            return { ...state,
                users: updateObjectArray( state.users, action.userId, 'id', {followed: false} )
            };

        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage,}

        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount,}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching,}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            }

        default:
            return state;
    }
};


export const makeFriend = (userId) => ({type: MAKE_FRIEND, userId});
export const notFriend = (userId) => ({type: NOT_FRIEND, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (followingInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
});


export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
    dispatch(setCurrentPage(currentPage));
}

const addDeleteFollowing = async (dispatch, userId, apiMethod, actionCreator ) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
        dispatch(toggleIsFollowingProgress(false, userId));
    }
}

export const addToFriend = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    await addDeleteFollowing(dispatch, userId, usersAPI.postFriend.bind(userId), makeFriend);
}

export const deleteFromFriends = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    await addDeleteFollowing(dispatch, userId, usersAPI.deleteFriend.bind(userId), notFriend);

}


export default usersReducer;