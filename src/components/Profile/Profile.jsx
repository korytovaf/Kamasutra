import React from 'react';
import style from './Profile.module.css';
import Posts from "./Posts/Posts";
import User from "./User/User";


const Profile = () => {
    return (
        <div className={style.profile}>
            <div className={style.image}></div>
            <User />
            <Posts />
        </div>
    );
}
export default Profile