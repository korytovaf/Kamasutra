import React from 'react';
import s from './App.module.css';
import Menubar from "./components/Menubar/Menubar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className={s.container}>
            <HeaderContainer />
            <Menubar/>
            <div className='content'>
                <Route path='/Profile/:UserId?'  render={ () => <ProfileContainer /> }/>
                <Route path='/Dialogs'  render={ () => <Dialogs /> }/>
                <Route path='/Users'  render={ () => <UsersContainer /> }/>
            </div>
        </div>
    );
}


export default App