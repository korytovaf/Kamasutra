import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.UserId;
        if (!userId) { userId = 9535 }
        this.props.getProfile(userId);
    }

    render() {
        return <Profile profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {setUserProfile, getProfile}
)(WithUrlDataContainerComponent);