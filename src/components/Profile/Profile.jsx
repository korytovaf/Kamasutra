import React from 'react';
import style from './Profile.module.css';
import Posts from "./Posts/Posts";
import User from "./User/User";

const Profile = (props) => {


    return (
        <div className={style.profile}>
            <User profile={props.profile.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <Posts />
        </div>
    );
}
export default Profile