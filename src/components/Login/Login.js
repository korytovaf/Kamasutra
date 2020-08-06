import React from "react";
import style from "./login.module.css"
import styleForm from "./../../components/common/FormControls/FormControls.module.css"
import {Field, reduxForm} from 'redux-form'
import {Input} from "../common/FormControls/FormControls";
import {maxLength, required} from "../../Utils/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxLength20 = maxLength(20)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.wrapper}>
            <div className={styleForm.loginError}>{props.error}</div>
            <Field name='email' component={Input} validate={[required, maxLength20]}/>
            <Field name='password' type='password' component={Input} validate={[required, maxLength20]} />
            <Field className={style.rememberMi} name='rememberMi' type='checkbox' component='input'/>
            <button className={style.button}>Войти</button>
        </form>
    );
}

const LoginFormRedux = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/Profile/'} />
    }

    return (
        <div className={style.form}>
            <h3 className={style.form__header}>Вход</h3>
            <LoginFormRedux onSubmit={onSubmit} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth
    };
}

export default connect(mapStateToProps, {login})(Login)

