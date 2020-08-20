import React from "react";
import {connect} from "react-redux";
import User from "./User";
import {requestUsers, addToFriend, deleteFromFriends, setCurrentPage} from "../../Redux/users-reducer";
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
        const { currentPage, pageSize } = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize)
    }



    render() {
        return <User
            users={this.props.users}
            addToFriend={this.props.addToFriend}
            deleteFromFriends={this.props.deleteFromFriends}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            followingInProgress={this.props.followingInProgress}
            isFetching={this.props.isFetching}
            isAuth={this.props.isAuth}
            profileMi={this.props.profileMi}
        />
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
        profileMi: state.auth.profileMi,
    };
}

export default connect(mapStateToProps,
    {addToFriend, deleteFromFriends, requestUsers, setCurrentPage}
)(UsersContainer)