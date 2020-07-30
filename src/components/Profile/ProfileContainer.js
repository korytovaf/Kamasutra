import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, setUserProfile} from "../../Redux/profile-reducer";
import { withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.UserId;
        if (!userId) { userId = 9535 }
        this.props.getProfile(userId);
    }

    render() {
        return <Profile profile={this.props.profile} isAuth={this.props.isAuth} />
    }
}


let mapStateToProps = (state) => ({ profile: state.profilePage });

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


