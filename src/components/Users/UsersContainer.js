import React from "react";
import {connect} from "react-redux";
import User from "./User";
import {requestUsers, addToFriend, deleteFromFriends, setCurrentPage} from "../../Redux/users-reducer";
import Preloader from "../Preloader/Preloader";
import {
    getUsers,
    getPageSize,
    getTotalCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress, getIsAuth
} from "../../Redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount = () => {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
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
                    isAuth={this.props.isAuth}
                />
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state),
    };
}

export default connect(mapStateToProps,
    {addToFriend, deleteFromFriends, requestUsers, setCurrentPage}
)(UsersContainer)