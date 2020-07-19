import React from 'react';
import style from './NewPost.module.css';

const NewPost = ({updateNewPostTextChange, valueNewPostText, addPost}) => {

    return (
        <div className={style.post}>
            <h3>Мой новый пост</h3>
            <textarea onChange={updateNewPostTextChange} rows='5' className={style.textarea}
                      value={valueNewPostText}/>
            <button onClick={addPost} className={style.button}>Опубликовать</button>
        </div>
    );
}

export default NewPost