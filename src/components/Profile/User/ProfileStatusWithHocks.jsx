import React, {useEffect, useState} from 'react';
import style from './User.module.css';


const ProfileStatusWithHocks = ({updateUserStatus, userId, userMi, ...props}) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => { setStatus(props.status)}, [props.status]);


    const activateEditMode = () => { setEditMode(true) }

    const deactivateEditMode = () => { setEditMode(false); updateUserStatus(status) }

    const onStatusChange = (e) => { setStatus(e.currentTarget.value) }

    return (
        <div>
            {!editMode && (userId === userMi
                ? <span onDoubleClick={activateEditMode}>{props.status || 'Добавьте статус'}</span>
                : <span>{props.status}</span>)
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