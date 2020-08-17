import React, {useEffect, useState} from 'react';
import style from './User.module.css';


const ProfileStatusWithHocks = ({updateUserStatus, isOwner, statusUser, ...props}) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(statusUser);

    useEffect(() => { setStatus(statusUser)}, [statusUser]);


    const activateEditMode = () => { setEditMode(true) }

    const deactivateEditMode = () => { setEditMode(false); updateUserStatus(status) }

    const onStatusChange = (e) => { setStatus(e.currentTarget.value) }

    return (
        <div className={style.user__status}>
            {!editMode && (isOwner
                ? <span onDoubleClick={activateEditMode}>{statusUser || 'Добавьте статус'}</span>
                : <span>{statusUser}</span>)
            }
            {editMode &&
                <input
                    onBlur={deactivateEditMode}
                    className={style.input}
                    autoFocus={true}
                    onChange={onStatusChange}
                    value={status}
                />
            }
        </div>
    )
}

export default ProfileStatusWithHocks