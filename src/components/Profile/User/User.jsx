import React, {useState} from 'react';
import style from './User.module.css';
import Preloader from "../../common/Preloader/Preloader";
import AvatarProfile from "./Avatar/AvatarProfile";
import UserProfile from "./UserProfile/UserProfile";

const User = ({profile, status, updateUserStatus, userMi, savePhotoAvatar, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {return <Preloader/>}

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhotoAvatar(e.target.files[0])
        }
    }

    let isOwner = userMi === profile.userId;

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div className={style.user}>
            <AvatarProfile
                profile={profile}
                onMainPhotoSelected={onMainPhotoSelected}
                isOwner={isOwner}
                editMode={editMode}
            />
            <UserProfile
                profile={profile}
                isOwner={isOwner}
                statusUser={status}
                updateUserStatus={updateUserStatus}
                editMode={editMode}
                setEditMode={setEditMode}
                onSubmit={onSubmit}
            />
        </div>
    );
}

export default User