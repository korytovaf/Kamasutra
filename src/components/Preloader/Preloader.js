import React from "react";
import s from './Preloader.module.css';
import loader from "../../asseds/img/Preloader.svg";

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img className={s.preloader__img} src={loader} alt='preloader' />
        </div>
    );
}

export default Preloader