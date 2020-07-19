import React from "react";
import {connect} from "react-redux";
import User from "./User";
import {makeFriend, notFriend, setUsersAC} from "../../Redux/users-reducer";

const UsersContainer = ({users, makeFriend, notFriend, setUsersAC }) => {
    return (
        <User users={users} makeFriend={makeFriend} notFriend={notFriend} setUsersAC={setUsersAC} />
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        makeFriend: (userId) => {dispatch(makeFriend(userId))},
        notFriend: (userId) => {dispatch(notFriend(userId))},
        setUsersAC: () => {dispatch(setUsersAC())},
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)