import React from 'react';
import s from './Header.module.css';
// import logo from '../../asseds/img/logo.png'
import MiProfile from "./MiProfile/MiProfile";

const Header = ({ isAuth, logout, profileMi }) => {

    return (
        <header className={s.header}>
            {/*<img alt='logo' src={logo}/>*/}
            <div className={s.auth}>
                <MiProfile isAuth={isAuth} logout={logout} profileMi={profileMi} />
            </div>
        </header>
    );
}
export default Header