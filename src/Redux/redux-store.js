import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    messagesPage: dialogReducer,
    postPage: profileReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;