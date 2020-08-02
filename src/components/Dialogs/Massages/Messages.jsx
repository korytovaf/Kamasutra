import React from "react";
import style from './Messages.module.css';
import {Field, reduxForm} from 'redux-form';

const Messages = (props) => {

    const adminStyle = {justifySelf: 'end', backgroundColor: '#ccf2b0'};
    const onSubmit = (value) => {
        props.addMessage(value.newMessage)
    }

    return (
        <ul className={style.massages}>
            {props.messagesData.map(message => {
                if (message.login === 'admin') {
                    return <li style={adminStyle} className={style.massage} key={message.id}>{message.message}</li>
                }
                return <li className={style.massage} key={message.id}>{message.message}</li>
            })}
            <MessageFormRedux onSubmit={onSubmit}/>
        </ul>
    );
}

const MessageForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={style.wrapper}>
        <Field rows='1' className={style.text__message} component={'textarea'} name={'newMessage'}/>
        <button className={style.button}></button>
    </form>
}

const MessageFormRedux = reduxForm({form: 'messages'})(MessageForm)

export default Messages