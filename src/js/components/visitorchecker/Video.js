const {log,error} = console

import React from 'react';

import * as Rx from 'rxjs'
import { take , tap,filter as rxFilter, map}  from 'rxjs/operators';



const source1 = ['d1','d2','d3']
const source2 = ['d4','d5','d6']
const source3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('delivery')
    },3000)
  })


const stream3 = Rx.of(...source1)


const stream1 = Rx.from(source1)
const stream2 = Rx.from(source2)
const stream_1and2 = Rx.concat(stream1,stream2)

const stream4 = Rx.interval(1000).pipe(
  tap((d)=>log(`x2: ${d*2}`) )  ,
  rxFilter(data => data == 2),
  take(10) ,  
  map(d => d*3)
).pipe(
  tap((d)=>log(`x3: ${d*3}`) )  
)
const stream5 = Rx.timer(3000,1000).pipe(take(10))
const stream_4and5 = Rx.concat(stream4,stream5)

const filter = {
  // next: (data) => {log(data)},
  next: log,
  complete: () => {log('done')},
  error: (err) => {}
}






stream4.subscribe(filter)


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
const H_capture = () => D_canvas.getContext('2d').drawImage(D_video,0,0,640,480);



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
        <button id="D_capture" className="btn btn-outline-primary ml-2" onClick={H_capture} > capture </button>
        <div id="D_Test" className="btn btn-outline-primary ml-2" onClick={H_Test} > Test </div>
      </>
    )
}