import React from 'react';
import Navbar from '../components/Navbar';
import JoinedChats from '../components/JoinedChats';
import ChatSearch from '../components/ChatSearch';
import AvailableChats from '../components/AvailableChats';
import ViewTitle from '../components/shared/ViewTitle';

export default function Home(){

 // ########## HOME VIEW START ############
 return (
    <div className='content-wrapper'>
      {/* ########## NAVBAR START ############ */}
        <Navbar />
      {/* ########## NAVBAR END ############ */}
      <div className="row no-gutters fh">
        <div className="col-3 fh">
        <JoinedChats />
         
        </div>
        <div className="col-9 fh">
            <ViewTitle />
            <AvailableChats />
        </div>
      </div>
    </div>
  )
  // ########## HOME VIEW END ############

}