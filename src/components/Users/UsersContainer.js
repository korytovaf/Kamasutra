import React from "react";
import {connect} from "react-redux";
import User from "./User";
import {getUsers, addToFriend, deleteFromFriends, setCurrentPage} from "../../Redux/users-reducer";
import Preloader from "../Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <User
                    users={this.props.users}
                    addToFriend={this.props.addToFriend}
                    deleteFromFriends={this.props.deleteFromFriends}
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress,
    };
}

export default connect(mapStateToProps,
    {addToFriend, deleteFromFriends, getUsers, setCurrentPage}
)(UsersContainer)