import React from 'react';
import style from './User.module.css';
import Preloader from "../../Preloader/Preloader";
import avatarPlaceholder from '../../../asseds/img/placeholder.jpg'
import ProfileStatus from './ProfileStatus'

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
            <div className={style.user_profile}>
                <div className={`${style.user_profile_list} ${style.name_user}`}>{props.profile.fullName}</div>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    );
}
export default User