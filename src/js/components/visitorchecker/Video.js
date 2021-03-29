import React from 'react'

const constraints = {audio: true,video: { width: 500 , height: 300}}
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

const H_switch = () => ((msg,stream) =>((msg) => _ = { 
  
  on, off 

}[msg](msg,stream))(msg,stream))(D_switch.innerHTML, _local_stream  )
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

      </>
    )
}