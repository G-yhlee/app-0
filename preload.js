const {ipcRenderer, contextBridge} = require('electron');


// contextBridge.exposeInMainWorld('e_noti',{
//     on_noti(msg){
//         ipcRenderer.send('type1',msg);
//     }
// })


window.on_noti = (msg) => {
    ipcRenderer.send('type1',msg);
}

