import React from 'react';
import HomeView from './views/Home'
import LoginView from './views/Login'
import SettingsView from './views/Settings'
import RegisterView from './views/Register'



import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Navbar from './components/Navbar';



export default function app(){

 return (

     <Router>
        <Navbar />
        <div className='content-wrapper'>

         <Switch>
            <Route path="/" exact>
                <HomeView />
            </Route>
            <Route path="/settings">
            <SettingsView />
            </Route>
            <Route path="/visitorchecker">
            <SettingsView />
            </Route>
            <Route path="/login">
            <LoginView />
            </Route>
            <Route path="/register">
            <RegisterView />
            </Route>

         </Switch>
    </div>

     </Router>
     
 )
}