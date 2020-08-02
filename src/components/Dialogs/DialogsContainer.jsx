import React from "react";
import style from './Dialogs.module.css';
import Messages from "./Massages/Messages";
import Dialog from "./Dialog/Dialog";
import {connect} from "react-redux";
import {addMessage} from "../../Redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const Dialogs = ({ dialogsData, messagesData, addMessage, isAuth }) => {

    return (
        <div className={style.wrapper}>
            <Dialog dialogsData={dialogsData}/>
            <Messages
                messagesData={messagesData}
                addMessage={addMessage}
                isAuth={isAuth}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
    };
}

export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect
)(Dialogs)
