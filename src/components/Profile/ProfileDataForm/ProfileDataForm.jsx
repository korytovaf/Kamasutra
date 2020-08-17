import React from "react";
import style from "../User/User.module.css";
import {createField, Input, Textarea} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import styleForm from "../../common/FormControls/FormControls.module.css";


const ProfileData = ({ handleSubmit, profile, error, deactivateEditMode }) => {

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <h3>Настройки</h3>

            {createField('', Input, 'aboutMe', 'text', [])}
            {createField('', Input, 'fullName', 'text', [])}
            {createField('', 'input', 'lookingForAJob', 'checkbox', [], 'lookingForAJob', 'В поиске работы', 'lookingForAJob')}
            {createField('', Textarea, 'lookingForAJobDescription', 'text', [])}

            {Object.keys(profile.contacts).map(key => {
                return (
                    <div key={key}>
                        <b>{key}: </b>{createField('', Input, `contacts.${key}`, 'text', [])}
                    </div>
                );
            })}

            <button>Сохранить</button>
            <button onClick={deactivateEditMode}>Отменить</button>
            <div className={styleForm.loginError}>{error}</div>
        </form>
    );
}

const ProfileDataFormRedux = reduxForm({form: 'profile'})(ProfileData)

export default ProfileDataFormRedux