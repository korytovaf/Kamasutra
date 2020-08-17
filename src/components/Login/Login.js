import React from "react";
import style from "./login.module.css"
import styleForm from "./../../components/common/FormControls/FormControls.module.css"
import {reduxForm} from 'redux-form'
import {createField, Input} from "../common/FormControls/FormControls";
import {maxLength, required} from "../../Utils/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxLength20 = maxLength(20)

const LoginForm = ({ handleSubmit, error, captcha }) => {
    return (
        <form onSubmit={handleSubmit} className={style.wrapper}>
            <div className={styleForm.loginError}>{error}</div>
            {createField(null, Input, 'email', null, [required, maxLength20])}
            {createField(null, Input, 'password', 'password', [required, maxLength20] )}
            {createField(`${style.rememberMi}`, 'input', 'rememberMi', 'checkbox', null)}
            <button className={style.button}>Войти</button>

            {captcha &&
                <div>
                    <img src={captcha} alt="captcha"/>
                    {createField(null, Input, 'captcha', 'text', [required])}
                </div>
            }

        </form>
    );
}

const LoginFormRedux = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth, captcha}) => {

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMi, formData.captcha);
    }

    if (isAuth) {
        return <Redirect to={'/Profile/'}/>
    }

    return (
        <div className={style.form}>
            <h3 className={style.form__header}>Вход</h3>
            <LoginFormRedux onSubmit={onSubmit} captcha={captcha}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha,
    };
}

export default connect(mapStateToProps, {login})(Login)

