import style from "../User.module.css";
import avatarPlaceholder from "../../../../asseds/img/placeholder.jpg";
import React from "react";

const AvatarProfile = ({ profile, isOwner, onMainPhotoSelected, editMode }) => {
    return (
        <div className={style.avatar}>
            <img
                className={style.avatar__img}
                src={profile.photos.large !== null ? profile.photos.large : avatarPlaceholder}
                alt={profile.fullName}
            />
            {
                editMode &&
                <form className={style.avatar__form}>
                    <input className={style.avatar__input} type={'file'} id='avatar__change'
                           onChange={onMainPhotoSelected} multiple/>
                    <label className={style.avatar__label} htmlFor='avatar__change'>
                        <span className={style.avatar__labelText}>Сменить аватар</span>
                    </label>
                </form>
            }
        </div>
    );
}

export default AvatarProfile
