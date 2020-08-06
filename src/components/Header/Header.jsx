import React from 'react';
import s from './Header.module.css';

import logo from '../../asseds/img/logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt='logo' src={logo}/>
            <div className={s.auth}>
                { props.isAuth
                    ? <div className={s.login}>
                        <div className={s.avatar}></div>
                        <div>{props.data.login}</div>
                        <button onClick={props.logout} className={s.auth__button}>Выйти</button>
                    </div>

                    : <NavLink className={s.auth__button} to={'/login'}>Войти</NavLink>
                }
            </div>
        </header>
    );
}
export default Header