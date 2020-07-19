import React from "react";
import style from './Dialogs.module.css';
import Messages from "./Massages/Messages";
import Dialog from "./Dialog/Dialog";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


const DialogsContainer = () => {


    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                <Dialog  massagesPage={store.getState().massagesPage}/>
{/*                {
                    props.state.massagesPage.dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name} />)
                }*/}
            </div>
            <Messages
                massagesData={props.state.massagesPage.massagesData}
            />
        </div>
    );
}
let mapStateToProps = (state) => {
    return {
        massagesPage: state.massagesPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMassage: () => {
            dispatch()
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps) (DialogsContainer);