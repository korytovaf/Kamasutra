import React from 'react';
import style from './User.module.css';
import Preloader from "../../Preloader/Preloader";
import avatarPlaceholder from '../../../asseds/img/placeholder.jpg'

const User = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={style.user}>
            <img
                className={style.avatar}
                src={ props.profile.photos.large !== null ? props.profile.photos.large : avatarPlaceholder }
                alt={props.profile.fullName}
            />
            <ul className={style.user_profile}>
                <li className={`${style.user_profile_list} ${style.name_user}`}>{props.profile.fullName}</li>
                <li className={style.user_profile_list}>{props.profile.aboutMe !== null ?`"${props.profile.aboutMe}"` : ""}</li>
            </ul>
        </div>
    );
}
export default User