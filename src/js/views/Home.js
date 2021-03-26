import React from 'react';
import JoinedChats from '../components/JoinedChats';
import ChatSearch from '../components/ChatSearch';
import AvailableChats from '../components/AvailableChats';
import ViewTitle from '../components/shared/ViewTitle';

export default function Home(){

 // ########## HOME VIEW START ############
 return (
      <div className="row no-gutters fh">
        <div className="col-3 fh">
        <JoinedChats />
         
        </div>
        <div className="col-9 fh">
            <ViewTitle text="choose your channel" />
            <AvailableChats />
        </div>
      </div>
  )
  // ########## HOME VIEW END ############

}