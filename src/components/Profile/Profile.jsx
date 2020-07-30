import React from 'react';
import style from './Profile.module.css';
import Posts from "./Posts/Posts";
import User from "./User/User";
import {Redirect} from "react-router-dom";

const Profile = (props) => {


    return (
        <div className={style.profile}>
            <div className={style.image}></div>
            <User profile={props.profile.profile} />
            <Posts />
        </div>
    );
}
export default Profile