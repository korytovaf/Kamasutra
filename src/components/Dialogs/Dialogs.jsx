import React from "react";
import style from './Dialogs.module.css';
import Messages from "./Massages/Messages";
import Dialog from "./Dialog/Dialog";
import {connect} from "react-redux";
import {addMessage, onMessageChange} from "../../Redax/dialogs-reducer";


const Dialogs = ({dialogsData, messagesData, newMessageText, onMessageChange, addMessage}) => {
    return (
        <div className={style.wrapper}>
            <Dialog dialogsData={dialogsData}/>
            <Messages
                messagesData={messagesData}
                onMessageValue={newMessageText}
                onMessageChange={onMessageChange}
                addMessage={addMessage}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (value) => {dispatch(onMessageChange(value))},
        addMessage: (id, login, message) => {dispatch(addMessage(id, login, message))},
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)