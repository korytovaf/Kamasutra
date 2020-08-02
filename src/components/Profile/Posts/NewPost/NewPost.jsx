import React from 'react';
import style from './NewPost.module.css';
import { Field, reduxForm } from 'redux-form'

const NewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={style.post}>
            <h3>Мой новый пост</h3>
            <Field
                rows='5'
                className={style.textarea}
                component='textarea'
                name='addNewPost'
            />
            <button className={style.button}>Опубликовать</button>
        </form>
    );
}

const NewPostFormRedux = reduxForm({ form: 'newPost' })(NewPostForm)

const NewPost = (props) => {
    const onSubmit = (value) => { props.addPost(value.addNewPost) }
    return <NewPostFormRedux onSubmit={onSubmit}/>
}

export default NewPost
