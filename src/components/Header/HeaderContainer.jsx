import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUser, setAuthUserData} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUser(this.props.data);
    }


    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    data: state.auth.data,
});

export default connect(mapStateToProps,
    {setAuthUserData, getAuthUser}
)(HeaderContainer)