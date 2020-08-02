import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, getUserStatus, setUserProfile, updateUserStatus} from "../../Redux/profile-reducer";
import { withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.UserId;
        if (!userId) { userId = 9535 }
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);

    }

    render() {
        return <Profile
            profile={this.props.profile}
            isAuth={this.props.isAuth}
            status={this.props.status}
            updateUserStatus={this.props.updateUserStatus}
        />
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, { setUserProfile, getProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


