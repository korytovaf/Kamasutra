import React from "react";
import {connect} from "react-redux";
import User from "./User";
import {
    makeFriend,
    notFriend,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Preloader from "../Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount = () => {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            });
    }
    render() {
        return <>
            {this.props.isFetching
                ? <Preloader />
                : <User
                    users={this.props.users}
                    makeFriend={this.props.makeFriend}
                    notFriend={this.props.notFriend}
                    setUsers={this.props.setUsers}
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    setCurrentPage={this.props.setCurrentPage}
                    setTotalCount={this.props.setTotalCount}
                    onPageChanged={this.onPageChanged}
                    componentDidMount={this.componentDidMount}

                />
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
}

export default connect(mapStateToProps,
    {
        makeFriend,
        notFriend,
        setUsers,
        setCurrentPage,
        setTotalCount,
        toggleIsFetching,
    }
    )(UsersContainer)