import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthProfileMi, logout, setAuthUserData} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component {

    refreshProfileMi() {
        let userId = this.props.userId;
        this.props.getAuthProfileMi(userId);
    }

    componentDidMount() {
        this.refreshProfileMi()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.userId !== prevProps.userId) {
            this.refreshProfileMi()
        }
    }


    render() {
        return <Header
            isAuth={this.props.isAuth}
            profileMi={this.props.profileMi}
            logout={this.props.logout}
            setAuthUserData={setAuthUserData}
            getAuthProfileMi={getAuthProfileMi}
        />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.id,
    profileMi: state.auth.profileMi,
});

export default connect(mapStateToProps,
    { setAuthUserData, logout, getAuthProfileMi }
)(HeaderContainer)