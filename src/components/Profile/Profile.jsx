import React from 'react';
import style from './Profile.module.css';
import Posts from "./Posts/Posts";
import User from "./User/User";

const Profile = ({profile, status, updateUserStatus, userMi}) => {

    return (
        <div className={style.profile}>
            <User profile={profile.profile} status={status} updateUserStatus={updateUserStatus} userMi={userMi}/>
            <Posts />
        </div>
    );
}
export default Profile