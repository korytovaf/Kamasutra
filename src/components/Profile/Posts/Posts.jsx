import React from 'react';
import style from './Posts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import {connect} from "react-redux";
import {addPost, updateNewPostTextChange} from "../../../Redux/profile-reducer";

const Posts = ( {postsData, newPostText, updateNewPostTextChange, addPost } ) => {

    return (
        <div className={style.posts}>
            <NewPost
                valueNewPostText={newPostText.newPostText}
                updateNewPostTextChange={updateNewPostTextChange}
                addPost={addPost}
            />
            <Post postsData={postsData} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostTextChange: (value) => {dispatch(updateNewPostTextChange(value))},
        addPost: ( id, login, post, date ) => {dispatch(addPost( id, login, post, date ))},
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts)