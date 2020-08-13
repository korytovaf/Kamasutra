import React from "react";
import styles from './FormControls.module.css'
import {Field} from "redux-form";

export const Textarea = ({input, meta: { touched, error }}) => {
    return (<div className={styles.wrapper}>
            <textarea className={`${touched && error ? styles.error : ""} ${styles.textarea}`} {...input}/>
            {
                touched &&
                error ? <span className={styles.error}>{error}</span> : undefined
            }
        </div>
    );
}

export const Input = ({input, meta: { touched, error }}) => {
    return (<div className={styles.wrapper}>
            <input className={`${touched && error ? styles.error : ""} ${styles.input}`} {...input}/>
            {
                touched &&
                error ? <span className={styles.error}>{error}</span> : undefined
            }
        </div>
    );
}

export const createField = (className, component, name, type, validate) => (
    <Field
        className={className}
        component={component}
        name={name}
        type={type}
        validate={validate}
    />
);