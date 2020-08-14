import React from 'react';
import style from './User.module.css';
import Preloader from "../../common/Preloader/Preloader";
import avatarPlaceholder from '../../../asseds/img/placeholder.jpg'
import ProfileStatusWithHocks from "./ProfileStatusWithHocks";

const User = ({profile, status, updateUserStatus, userMi, savePhotoAvatar}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhotoAvatar(e.target.files[0])
        }
    }

    return (
        <div className={style.user}>
            <div className={style.avatar}>
                <img
                    className={style.avatar__img}
                    src={profile.photos.large !== null ? profile.photos.large : avatarPlaceholder}
                    alt={profile.fullName}
                />
                {
                    userMi === profile.userId
                        ? <form className={style.avatar__form}>
                            <input className={style.avatar__input} type={'file'} id='avatar__change'
                                   onChange={onMainPhotoSelected} multiple/>
                            <label className={style.avatar__label} for='avatar__change'>
                                <span className={style.avatar__labelText}>Сменить аватар</span>
                            </label>
                        </form>
                        : null
                }
            </div>
            <div className={style.user_profile}>
                <div className={`${style.user_profile_list} ${style.name_user}`}>{profile.fullName}</div>
                <ProfileStatusWithHocks
                    status={status}
                    updateUserStatus={updateUserStatus}
                    userId={profile.userId}
                    userMi={userMi}
                />
                <div>{profile.aboutMe}</div>
                <div>{profile.lookingForAJob}</div>
                <div>{profile.lookingForAJobDescription}</div>
                <div>
                    <div>{profile.contacts.facebook ? profile.contacts.facebook : ''}</div>
                </div>
            </div>
        </div>
    );
}
export default User