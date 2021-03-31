const {log,error} = console

import React from 'react';

import * as Rx from 'rxjs'
import { take , tap,filter as rxFilter, map, mergeMap,concatMap, concatAll, mergeAll}  from 'rxjs/operators';




// var xhr = new XMLHttpRequest();
// var url = "url";
// xhr.open("POST", url, true);
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         var json = JSON.parse(xhr.responseText);
//         console.log(json.email + ", " + json.password);
//     }
// };
// var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
// xhr.send(data);



// console.log(xhr)




const capture = () => D_canvas.getContext('2d').drawImage(D_video,0,0,640,480);
// stream
const stream_x = Rx.interval(75).pipe( take(20),tap((d)=>log(d+'d')))

// pipe 설계
const pipe_capture = data => new Promise((resolve,reject)=>{
  setTimeout(()=>{
    capture()
    resolve(log(data))
  },75)
}) 

// stream-pipe
const F_stream =  () => stream_x.pipe(
  concatMap( data => Rx.from(pipe_capture(data)) )
).subscribe()



const constraints = {audio: false,video: { width: 500 , height: 300}}
let _local_stream
async function _getStream(constraints) {
  try {
    let _stream = await navigator.mediaDevices.getUserMedia(constraints)
    D_video.srcObject = _stream
    _local_stream = D_video.srcObject
  } catch(err) {
   console.log( `navigator.getUserMedia.error:${err.toString()}`)
  }
}

const _stop =  (stream) =>  stream.getTracks().forEach(track => track.stop())

const on = (msg) => {
  _getStream(constraints)
  _ = console.log(msg)
  _ = D_switch.innerHTML = "off"
}

const off = (msg,stream) => {
  _ = console.log(msg)
  _ = _stop(stream)
  _ = D_switch.innerHTML = "on"
  _ = console.log(D_canvas)
  _ = D_canvas.toDataURL("./")
}

const H_switch = () => 
(
  ({msg,stream}) =>
  ((msg) => 
            _ = { on, off }[msg](msg,stream))  
  (msg,stream))
  ({msg: D_switch.innerHTML, stream: _local_stream}
)
const H_Test = () => o()




export default function _(){
    return(
      <>
        <center>
            <video  id="D_video" playsInline autoPlay></video> 
            <canvas id="D_canvas" width="500" height="300"> </canvas>
            <div id="D_target_pictures" width="500" height="300"> </div>
        </center>
        <br></br>
        <button id="D_switch" className="btn btn-outline-primary ml-2" onClick={H_switch} >on</button>
        <button id="D_capture" className="btn btn-outline-primary ml-2" onClick={F_stream} > capture </button>
        <div id="D_Test" className="btn btn-outline-primary ml-2" onClick={H_Test} > Test </div>
      </>
    )
}