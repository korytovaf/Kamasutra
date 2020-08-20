import React from "react";
import s from './Users.module.css';
import avatarPlaceholder from '../../asseds/img/placeholder.jpg';
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";

const User = (props) => {
    return (
        <div>
            <Paginator
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                totalCount={props.totalCount}
            />
            {props.isFetching
                ? <Preloader />
                : <ul className={s.users}>
                    {
                        props.users.map(user => {

                            return (
                                <li className={s.user} key={user.id}>
                                    <NavLink to={`/Profile/${user.id}`}>
                                        <img className={s.user__img}
                                             src={user.photos.small != null ? user.photos.small : avatarPlaceholder}
                                             alt={user.name}
                                        />
                                    </NavLink>

                                    <div className={s.user__data}>
                                        <div className={s.user__name}>{user.name}</div>
                                        <div className={s.user__status}>{user.status}</div>
                                    </div>

                                    { props.isAuth && props.profileMi.userId !== user.id &&
                                        <div className={s.user__friend}>

                                            <div className={s.user__friend_true}>
                                                {user.followed ? 'вы друзья' : ''}
                                            </div>

                                            {user.followed
                                                ?
                                                <button
                                                    disabled={props.followingInProgress.some(id => id === user.id)}
                                                    className={s.user__button}
                                                    onClick={() => {
                                                        props.deleteFromFriends(user.id)
                                                    }}
                                                >Удалить из друзей</button>
                                                :
                                                <button
                                                    disabled={props.followingInProgress.some(id => id === user.id)}
                                                    className={s.user__button}
                                                    onClick={() => {
                                                        props.addToFriend(user.id)
                                                    }}
                                                >Добавить в друзья</button>
                                            }
                                        </div>
                                    }

                                </li>
                            );
                        })
                    }
                </ul>
            }
        </div>
    );
}


export default User