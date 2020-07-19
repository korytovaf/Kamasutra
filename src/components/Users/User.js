import React from "react";
import s from './Users.module.css';

const User = ({ users, makeFriend, notFriend, setUsersAC }) => {
    return (
        <ul className={s.users}>
            {
                users.users.map( user => {
                    return (
                        <li className={s.user} key={user.id}>
                            <img className={s.user__img} src={user.avatar} alt={user.name}/>
                            <div className={s.user__data}>
                                <div className={s.user__name}>{user.name}</div>
                                <div className={s.user__status}>{user.status}</div>
                            </div>
                            <div className={s.user__friend}>
                                <div className={s.user__friend_true}>
                                    {user.friend ? 'вы друзья' : ''}
                                </div>
                                {
                                    user.friend
                                        ? <button onClick={() => notFriend(user.id)} className={s.user__button}>Удалить из друзей</button>
                                        : <button onClick={() => makeFriend(user.id)} className={s.user__button}>Добавить в друзья</button>
                                }
                            </div>
                        </li>
                    );

                })
            }
        </ul>
    );
}
export default User