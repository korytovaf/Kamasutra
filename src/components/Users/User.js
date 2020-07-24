import React from "react";
import s from './Users.module.css';
import avatarPlaceholder from '../../asseds/img/placeholder.jpg'

const User = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    if (p === props.currentPage - 3) {
                        return (
                            <span key={p}>
                                <span className={s.paginator} onClick={(e) => props.onPageChanged(p)}>1</span>
                                <span>...</span>
                            </span>
                        )
                    }
                    if (p < props.currentPage - 3) {
                        return null
                    }
                    if (p === props.currentPage + 3) {
                        return <span key={p}> ... из {props.totalCount}</span>
                    }
                    if (p > props.currentPage + 3) {
                        return null
                    }

                    return (
                        <span
                            key={p}
                            onClick={(e) => props.onPageChanged(p)}
                            className={`${props.currentPage === p ? s.paginatorActive : ''} ${s.paginator}`}>
                                {p}
                            </span>
                    );
                })
                }
            </div>
            <ul className={s.users}>

                {
                    props.users.map(user => {

                        return (
                            <li className={s.user} key={user.id}>
                                <img className={s.user__img}
                                     src={user.photos.small != null ? user.photos.small : avatarPlaceholder}
                                     alt={user.name}
                                />
                                <div className={s.user__data}>
                                    <div className={s.user__name}>{user.name}</div>
                                    <div className={s.user__status}>{user.status}</div>
                                </div>
                                <div className={s.user__friend}>
                                    <div className={s.user__friend_true}>
                                        {user.followed ? 'вы друзья' : ''}
                                    </div>
                                    {
                                        user.followed
                                            ?
                                            <button onClick={() => props.notFriend(user.id)}
                                                    className={s.user__button}>Удалить из
                                                друзей</button>
                                            :
                                            <button onClick={() => props.makeFriend(user.id)}
                                                    className={s.user__button}>Добавить
                                                в друзья</button>
                                    }
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}


export default User