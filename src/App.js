import React from 'react';
import s from './App.module.css';
import Menubar from "./components/Menubar/Menubar";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
    return (
        <div className={s.container}>
            <HeaderContainer />
            <Menubar/>
            <div className='content'>
                <Route path='/Profile/:UserId?'  render={ () => <ProfileContainer /> }/>
                <Route path='/Dialogs'  render={ () => <DialogsContainer /> }/>
                <Route path='/Users'  render={ () => <UsersContainer /> }/>
                <Route path='/Login'  render={ () => <Login /> }/>
            </div>
        </div>
    );
}


export default App