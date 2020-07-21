import React from 'react';
import style from './Menubar.module.css';
import {NavLink} from "react-router-dom";

const Menubar = () => {
    return (
        <div className={style.menubar}>
            <nav>
                <ul className={style.list}>
                    <li className={style.item}>
                        <NavLink activeClassName={style.active} to='/Profile'>Профиль</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink activeClassName={style.active} to='/Dialogs'>Сообщения</NavLink>
                    </li>
                    <li className={style.item}>
                        <a href='#n'>Фото</a>
                    </li>
                    <li className={style.item}>
                        <a href='#n'>Настройки</a>
                    </li>
                    <li className={style.item}>
                        <NavLink activeClassName={style.active} to='/Users'>Пользователи</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Menubar