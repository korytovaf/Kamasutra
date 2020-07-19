import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Menubar from "./components/Menubar/Menubar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = () => {
    return (
        <div className={s.container}>
            <Header/>
            <Menubar/>
            <div className='content'>
                <Route path='/Profile'  render={ () => <Profile /> }/>
                <Route path='/Dialogs'  render={ () => <Dialogs /> }/>
            </div>
        </div>
    );
}


export default App