import style from "../User.module.css";
import ProfileStatusWithHocks from "../ProfileStatusWithHocks";
import ProfileDataFormRedux from "../../ProfileDataForm/ProfileDataForm";
import React from "react";


const UserProfile = ({profile, statusUser, isOwner, updateUserStatus, editMode, setEditMode, onSubmit}) => {

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <div className={style.user_profile}>
            {
                isOwner && <button className={style.setting__button} onClick={activateEditMode}></button>
            }
            <h3 className={`${style.user_profile_list} ${style.name_user}`}>{profile.fullName}</h3>
            <ProfileStatusWithHocks statusUser={statusUser} updateUserStatus={updateUserStatus} isOwner={isOwner}/>
            {
                editMode
                    ? <ProfileDataFormRedux
                        initialValues={profile}
                        onSubmit={onSubmit}
                        profile={profile}
                        deactivateEditMode={deactivateEditMode}
                    />
                    : <ProfileData profile={profile} isOwner={isOwner} setEditMode={setEditMode}/>
            }
        </div>
    );
}

export default UserProfile

const ProfileData = ({profile}) => {
    return (
        <div className={style.user_profile_list}>
            <div>{profile.aboutMe ? profile.aboutMe : ''}</div>
            <div>{profile.lookingForAJob ? profile.lookingForAJob : ''}</div>
            <div>{profile.lookingForAJobDescription ? profile.lookingForAJobDescription : ''}</div>

            <div className={style.contacts}>
                {
                    Object.keys(profile.contacts).map(key => {
                        if (profile.contacts[key]) {
                            return <a href={profile.contacts[key]} key={key} className={style.contacts__link}>{key}</a>
                        } return null
                    })
                }
            </div>
        </div>
    )
}