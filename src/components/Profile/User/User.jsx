import React from 'react';
import style from './User.module.css';
import Preloader from "../../common/Preloader/Preloader";
import avatarPlaceholder from '../../../asseds/img/placeholder.jpg'
import ProfileStatusWithHocks from "./ProfileStatusWithHocks";

const User = ({profile, status, updateUserStatus, userMi}) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div className={style.user}>
            <img
                className={style.avatar}
                src={ profile.photos.large !== null ? profile.photos.large : avatarPlaceholder }
                alt={profile.fullName}
            />
            <div className={style.user_profile}>
                <div className={`${style.user_profile_list} ${style.name_user}`}>{profile.fullName}</div>
                <ProfileStatusWithHocks
                    status={status}
                    updateUserStatus={updateUserStatus}
                    userId={profile.userId}
                    userMi={userMi}
                />
            </div>
        </div>
    );
}
export default User