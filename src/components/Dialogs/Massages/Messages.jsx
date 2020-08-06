import React from "react";
import style from './Messages.module.css';
import {Field, reduxForm} from 'redux-form';
import {maxLength, required} from "../../../Utils/validators";
import {Textarea} from "../../common/FormControls/FormControls";

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

const maxLength5 = maxLength(5)

const MessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={style.wrapper}>
            <Field rows='1'
                   component={Textarea}
                   name='newMessage'
                   validate={[required, maxLength5]}
            />
            <button className={style.button}></button>
        </form>
    );
}

const MessageFormRedux = reduxForm({form: 'messages'})(MessageForm)

export default Messages