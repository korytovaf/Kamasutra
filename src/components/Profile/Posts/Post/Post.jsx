import React from 'react';
import style from './Post.module.css';


const Post = (props) => {
    return (
        <ul>
            {
                props.postsData.map((post) => {
                    return (
                        <li key={post.id} className={style.item}>
                            <div className={style.item__post}>
                                <div className={style.avatar}></div>
                                <div>Автор: Александр К.</div>
                                <div>{post.date}</div>
                            </div>

                            <div className={style.wrapper}>
                                <div className={style.massege}>
                                    {post.post}
                                </div>
                                <div className={style.like}>
                                    <button className={style.btn}>
                                        <span className={style.img}></span>
                                        <span>{post.like}</span>
                                    </button>
                                </div>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
}
export default Post