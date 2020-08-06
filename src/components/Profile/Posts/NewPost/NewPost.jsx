import React from 'react';
import style from './NewPost.module.css';
import { Field, reduxForm } from 'redux-form'
import {Textarea} from "../../../common/FormControls/FormControls";
import {maxLength, required} from "../../../../Utils/validators";

const maxLength5 = maxLength(5);

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.post}>
            <h3>Мой новый пост</h3>
            <Field
                component={Textarea}
                name='addNewPost'
                validate={[required, maxLength5]}
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
