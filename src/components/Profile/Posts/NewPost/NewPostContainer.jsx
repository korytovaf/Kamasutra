// import React from 'react';
import {addNewPostActionCreator, updateNewPostText} from "../../../../Redax/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";


/*

const NewPostContainer = (props) => {
    let state = props.store.postPage();

    let onPostChange = (newText) => {
        props.dispatch(updateNewPostText(newText));
    };

    let addPost = (post) => {
        props.dispatch(addNewPostActionCreator(post));
    }

    return (
        <NewPost updateNewPostText={onPostChange} updateNewPost={addPost} newPostText={state.newPostText}/>
    );
}
*/





let mapStateToProps = (state) => {
    return {
        postPage: state.postPage.postsData,
        newPostText: state.postPage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (newText) => {dispatch(updateNewPostText(newText));},
        updateNewPost: (post) => {dispatch(addNewPostActionCreator(post));}
    }
}


const NewPostContainer = connect(mapStateToProps, mapDispatchToProps) (NewPost);

export default NewPostContainer