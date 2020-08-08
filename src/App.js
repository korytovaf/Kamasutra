import React from 'react';
import s from './App.module.css';
import Menubar from "./components/Menubar/Menubar";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() { this.props.initializeApp() }

    render() {
        if (!this.props.initial) {
            return <Preloader />
        }
        return (
            <div className={s.container}>
                <HeaderContainer />
                <Menubar/>
                <div className='content' >
                    <Route path='/Profile/:UserId?' render={() => <ProfileContainer/>} />
                    <Route path='/Dialogs' render={() => <DialogsContainer/>} />
                    <Route path='/Users' render={() => <UsersContainer/>} />
                    <Route path='/Login' render={() => <Login/>} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initial: state.app.initial,
    };
}

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App)