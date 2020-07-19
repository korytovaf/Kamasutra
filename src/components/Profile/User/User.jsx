import React from 'react';
import style from './User.module.css';

const User = () => {
    return (
        <div className={style.user}>

            <div className={style.avatar}></div>

            <ul className={style.user_profile}>
                <li className={`${style.user_profile_list} ${style.name_user}`}>Александр К.</li>
                <li className={style.user_profile_list}>Дата рождения: 25.07.1982</li>
                <li className={style.user_profile_list}>Город: Иваново</li>
                <li className={style.user_profile_list}>Email: kaf1@mail.ru</li>
                <li className={style.user_profile_list}>Web site: www.kaf1.ru</li>
            </ul>
        </div>
    );
}
export default User