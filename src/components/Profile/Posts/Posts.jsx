import React from 'react';
import style from './Posts.module.css';
import Post from "./Post/Post";
import {connect} from "react-redux";
import {addPost} from "../../../Redux/profile-reducer";
import NewPost from "./NewPost/NewPost";

const Posts = ( {postsData, addPost } ) => {
    return (
        <div className={style.posts}>
            <NewPost addPost={addPost}  />
            <Post postsData={postsData} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    }
}


export default connect(mapStateToProps, {addPost})(Posts)