import React from 'react'
import ChatUserList from '../components/ChatUsersList'
import {Link} from 'react-router-dom'
import ViewTitle from '../components/shared/ViewTitle'
import ChatMessagesList from '../components/ChatMessages'


export default function _(){
    return (

        <div className="row no-gutters fh">
        <div className="col-3 fh">
        < ChatUserList />
        </div>
        <div className="col-9 fh">
           
        < ViewTitle />
        < ChatMessagesList />

        </div>
        </div>
      )
      // ########## CHAT VIEW END ############
}