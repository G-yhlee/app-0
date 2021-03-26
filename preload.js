const {ipcRenderer, contextBridge, desktopCapturer} = require('electron');


// contextBridge.exposeInMainWorld('e_noti',{
//     on_noti(msg){
//         ipcRenderer.send('type1',msg);
//     }
// })


window.on_noti = (msg) => {
    ipcRenderer.send('type1',msg);
}

// desktopCapturer.getSources({ types: ['window', 'screen'] }).then(async sources => {
//     for (const source of sources) {
// // console.log(source.name === 'Hello World!')
// // console.log(source.name )
// // console.log(source )


//     //   if (source.name === 'Electron') {
//         if (true) {
//         try {
//           const stream = await navigator.mediaDevices.getUserMedia({
//             audio: false,
//             video: {
//               mandatory: {
//                 chromeMediaSource: 'desktop',
//                 chromeMediaSourceId: source.id,
//                 minWidth: 1280,
//                 maxWidth: 1280,
//                 minHeight: 720,
//                 maxHeight: 720
//               }
//             }
//           })
//           handleStream(stream)
//         } catch (e) {
//           handleError(e)
//         }
//         return
//       }
//     }
//   })
  
//   function handleStream (stream) {
//     const video = document.querySelector('video')
//     video.srcObject = stream
//     video.onloadedmetadata = (e) => video.play()
//   }
  
//   function handleError (e) {
//     console.log(e)
//   }