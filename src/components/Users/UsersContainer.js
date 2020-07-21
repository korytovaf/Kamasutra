import React from "react";
import {connect} from "react-redux";
import User from "./User";
import {makeFriend, notFriend, setCurrentPageAC, setTotalCountAC, setUsersAC} from "../../Redux/users-reducer";


const UsersContainer = ({users, totalCount, pageSize, currentPage, setTotalCount, setCurrentPage, makeFriend, notFriend, setUsersAC }) => {
    return (
        <User
            users={users}
            makeFriend={makeFriend}
            notFriend={notFriend}
            setUsers={setUsersAC}
            totalCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setTotalCount={setTotalCount}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        makeFriend: (userId) => {dispatch(makeFriend(userId))},
        notFriend: (userId) => {dispatch(notFriend(userId))},
        setUsersAC: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber))},
        setTotalCount: (totalCount) => {dispatch(setTotalCountAC(totalCount))},
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)