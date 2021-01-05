import React from "react";
import s from "../Header.module.css";
import avatarPlaceholder from "../../../asseds/img/placeholder.png";
import {NavLink} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";

const MiProfile = ({isAuth, logout, profileMi}) => {

    return (
        <div>
            {isAuth
                ? (!profileMi
                    ? <Preloader/>
                    : <div className={s.login}>
                        <img
                            className={s.avatar}
                            src={profileMi.photos.large !== null ? profileMi.photos.large : avatarPlaceholder}
                            alt={profileMi.fullName}
                        />
                        <div>{profileMi.fullName}</div>
                        <button onClick={logout} className={s.auth__button}>Выйти</button>
                    </div>
                )
                : <NavLink className={s.auth__button} to={'/login'}>Войти</NavLink>
            }
        </div>
    );
}

export default MiProfile