import React from "react";
import style from './Dialog.module.css';
import {NavLink} from "react-router-dom";


const Dialog = (props) => {

    return (
        <ul className={style.dialogs}>
            {
                props.dialogsData.map( dialog => {
                    return (
                        <NavLink
                            key={dialog.id}
                            className={style.dialog}
                            activeClassName={style.active}
                            to={`/Dialogs/${dialog.login}`}
                        >
                            {dialog.name}
                        </NavLink>
                    );
                })
            }
        </ul>
    );
}

export default Dialog