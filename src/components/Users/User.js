import React from "react";
import s from './Users.module.css';
import * as axios from "axios";
import avatarPlaceholder from '../../asseds/img/placeholder.jpg'

class User extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            });

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) { pages.push(i) }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return (
                            <span
                                onClick={(e) => this.onPageChanged(p)}
                                className={`${this.props.currentPage === p ? s.paginatorActive : ''} ${s.paginator}`}>
                                { p }
                            </span>
                        );
                    })
                    }
                </div>
                <ul className={s.users}>

                    {
                        this.props.users.map(user => {

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
                                                <button onClick={() => this.props.notFriend(user.id)}
                                                        className={s.user__button}>Удалить из
                                                    друзей</button>
                                                :
                                                <button onClick={() => this.props.makeFriend(user.id)}
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
}


export default User