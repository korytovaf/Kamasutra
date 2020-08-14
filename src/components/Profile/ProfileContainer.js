import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    getProfile,
    getUserStatus,
    savePhotoAvatar,
    setUserProfile,
    updateUserStatus
} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.UserId;
        if (!userId) {
            userId = this.props.userId
        }
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    };

    componentDidMount() {
        this.refreshProfile();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.UserId !== prevProps.match.params.UserId) {
            this.refreshProfile();
        }
    };

    render() {
        const {profile, isAuth, status, updateUserStatus, userId, savePhotoAvatar} = this.props
        return <Profile
            profile={profile}
            isAuth={isAuth}
            status={status}
            updateUserStatus={updateUserStatus}
            userMi={userId}
            savePhotoAvatar={savePhotoAvatar}
        />
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage,
    status: state.profilePage.status,
    userId: state.auth.id
});

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {setUserProfile, getProfile, getUserStatus, updateUserStatus, savePhotoAvatar}),
)(ProfileContainer)


