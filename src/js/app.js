import React from 'react';
import {ipcRenderer} from 'electron';

export default function app(){
    // debugger
    const title = "title"
    const on_noti = () => {
        ipcRenderer.send('type1','data1');
        window.on_noti('data1')
    }
    return(
        <>
            <h1>{title}</h1>
            <button onClick={on_noti} >noti</button>
        </>
    )
}