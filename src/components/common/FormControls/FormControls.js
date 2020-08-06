import React from "react";
import styles from './FormControls.module.css'

export const Textarea = ({input, label, type, meta: { touched, error, warning }}) => {
    return (<div className={styles.wrapper}>
            <textarea className={`${touched && error ? styles.error : ""} ${styles.textarea}`} {...input}/>
            {
                touched &&
                error ? <span className={styles.error}>{error}</span> : undefined
            }
        </div>
    );
}

export const Input = ({input, label, type, meta: { touched, error, warning }}) => {
    return (<div className={styles.wrapper}>
            <input className={`${touched && error ? styles.error : ""} ${styles.input}`} {...input}/>
            {
                touched &&
                error ? <span className={styles.error}>{error}</span> : undefined
            }
        </div>
    );
}