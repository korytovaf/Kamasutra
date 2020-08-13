import profileReducer, {addPost, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    postsData: [
        {id: 1, login: 'admin', post: 'Привет, это мой первый пост', like: 0, date: '21/05/2019 18:00'},
        {id: 2, login: 'admin', post: 'Привет, это мой второй пост', like: 0, date: '21/05/2019 18:00'},
        {id: 3, login: 'admin', post: 'Третий пост', like: 20, date: '17/07/2020 22:00'},
    ]
};

it('length of post should be incremented', () => {
    // 1. test data (начальные данные)
    let action = addPost('New post - it-kamasutra');
    // 2. action (действие)
    let newState = profileReducer(state, action);
    // 3. expectation (ожидаем)
    expect(newState.postsData.length).toBe(4);
});

it('text of newPost must match', () => {
    let action = addPost('New post - it-kamasutra');
    let newState = profileReducer(state, action);
    expect(newState.postsData[3].post).toBe('New post - it-kamasutra');
});

it('after deleting length of posts should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(2);
});

it('after deleting length shouldn`t be decrement if id is incorrect', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3);
});