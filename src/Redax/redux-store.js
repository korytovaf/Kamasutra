import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";

let reducers = combineReducers({
    messagesPage: dialogReducer,
    postPage: profileReducer,
});

let store = createStore(reducers);

window.store = store;
export default store;