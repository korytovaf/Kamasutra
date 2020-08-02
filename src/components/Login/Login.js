import React from "react";
import style from "./login.module.css"
import {Field, Form, reduxForm} from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div >
                <Field
                    className={style.form__item}
                    name={'login'}
                    placeholder={'Имя пользователя'}
                    component={'input'}
                />
            </div>
            <div>
                <Field
                    className={style.form__item}
                    name={'password'}
                    placeholder={'Пароль'}
                    component={'input'}
                />
            </div>
            <div>
                <Field
                    className={style.form__item}
                    name={'rememberMi'}
                    type={'checkbox'}
                    component={'input'}
                /> Запомнить меня
            </div>
            <div>
                <button className={style.form__item}>Войти</button>
            </div>
        </form>
    );
}

const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div className={style.form}>
        <h3 className={style.form__header}>Вход</h3>
        <LoginFormRedux onSubmit={onSubmit}/>
    </div>
}

export default Login

