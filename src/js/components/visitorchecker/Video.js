const {log,error} = console

import React from 'react';
import { promisify } from 'util';
import * as Rx from 'rxjs'
import { take , tap,filter as rxFilter, map, mergeMap,concatMap, concatAll, mergeAll}  from 'rxjs/operators';


const a2o_url = "http://aiio.gridone.net:18080/api/test_visitor_checker/v2/predict"


// data format
const data = {
  "reqid": "gridonesurveillance",
  "input": {
      "items": [
          {
              "frames": ["1"],
              "client_id": "new_test_v1",
              "src": "0",
              "edge_filter": "1",
              "eye_dist2min_size_ratio": "0.35",
              "yaw_thresh": [
                  "-28",
                  "28"
              ],
              "pitch_thresh": [
                  "-15",
                  "15"
              ],
              "known_people_conf_thresh": "0.75",
              "unknown_people_conf_thresh": "0.8",
              "visit_cnt_gap": [
                  "0",
                  "0",
                  "15"
              ],
              "clustering_thresh": "0.95"
          }
      ]
  }
};


// box
let box = []



// post_box
const post_box = () => {
  console.log(box)
  data.input.items[0].frames = []
  fetch(a2o_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(json => console.log(`DATA FROM : ${json.reqid} \n`,json))
}

const capture = () => D_canvas.getContext('2d').drawImage(D_video,0,0);

// stream
const stream_x = Rx.interval(75).pipe( take(20),tap((d)=>log(d+'d')))

// pipe 설계
const t1_pipe_capture = d => new Promise((resolve,reject)=>{
  setTimeout(()=>{
    capture()
    let box_content = D_canvas.toDataURL("image/jpeg").split(',')[1] 
    log(box_content) // 일단 필요한 정보만 추출 하는거 성공
    box.push(box_content) // 박스 배열에 저장
    return resolve(log(d)) // 이거 굳이 안써도 되는거 같은데
  },75)
}) 

async function pipe1(d){
  await t1_pipe_capture(d)
} 

const pipend = {
  complete: post_box,
  error: (err) => log(err)
}



// stream-pipe
const F_stream = () => stream_x.pipe(
  concatMap( data => pipe1(data) )
).subscribe(pipend)



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