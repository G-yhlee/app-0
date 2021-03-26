import React from 'react';
import HomeView from './views/Home' 
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
         <Route path="/settings">
               <h1> set </h1>
            </Route>
            <Route path="/login">
               <h1> login </h1>
            </Route>
            <Route path="/register">
               <h1> register </h1>
            </Route>
             <Route path="/">
                <HomeView />
            </Route>
         </Switch>
    </div>

     </Router>
     
 )
}