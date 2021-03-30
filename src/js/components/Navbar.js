import React from 'react'
import {Link , useHistory} from 'react-router-dom';

export default function _(){
  const history = useHistory();
    return(
        <div className="chat-navbar">
        <nav className="chat-navbar-inner">
          <div className="chat-navbar-inner-left">
            <button
              onClick={()=>history.goBack()}
              className="btn btn-outline-primary"
            >
              back

            </button>
            <Link 
            to="/settings" 
            className="btn btn-outline-primary ml-2">Settings</Link>

            <Link 
            id="VisitorChecker"
            to="/VisitorChecker" 
            className="btn btn-outline-primary ml-2">VisitorChecker</Link>
            <Link 
            id="Tester"
            to="/Tester" 
            className="btn btn-outline-primary ml-2">Tester</Link>



          </div>
          <div className="chat-navbar-inner-right">
            <span className="logged-in-user">Hi User</span>
            <button
            onClick={()=>history.push('/register')}

              
              className="btn btn-outline-danger ml-2">Register</button>
            <button
                          onClick={()=>history.push('/login')}

              className="btn btn-outline-success ml-2">Login</button>
          </div>
        </nav>
      </div>
    )
}