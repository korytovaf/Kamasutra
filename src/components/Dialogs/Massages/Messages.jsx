import React from "react";
import style from './Messages.module.css'

const Messages = ( {messagesData, onMessageValue, onMessageChange, addMessage} ) => {

    let adminStyle = {justifySelf: 'end', backgroundColor: '#ccf2b0'};

    return (
        <ul className={style.massages}>
            {
                messagesData.map( message => {
                    if (message.login === 'admin') {
                        return (
                            <li style={adminStyle} className={style.massage} key={message.id}>{message.message}</li>
                        );
                    } else {
                        return (
                            <li className={style.massage} key={message.id}>{message.message}</li>
                        );
                    }
                })
            }
            <div className={style.wrapper}>
                <textarea value={onMessageValue} onChange={onMessageChange} rows='1' className={style.textmassege}></textarea>
                <button onClick={addMessage} className={style.button}></button>
            </div>
        </ul>
    );
}

export default Messages