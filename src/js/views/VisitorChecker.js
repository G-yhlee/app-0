import React from 'react'
const H_capture = () => D_canvas.getContext('2d').drawImage(D_video,0,0,640,480);
const H_stop = () =>  D_record.innerHTML = "record"
const H_log = () => _H_log;
const constraints = {audio: true,video: { width: 500 , height: 300}}

let _local_stream

async function _getStream(constraints) {
  try {
    let _stream = await navigator.mediaDevices.getUserMedia(constraints)
    D_video.srcObject = _stream
    _local_stream = D_video.srcObject
  } catch(err) {
   D_errMsg.innerHTML = `navigator.getUserMedia.error:${err.toString()}`
  }
}
 const H_Download = () => {
  let D_Download = document.getElementById("D_Download");
  var image = D_canvas.toDataURL("image/jpg");
  console.log(image)
  D_Download.href = image;
}; 


const H_post = () => {
  var image = D_canvas.toDataURL("image/jpg");
  console.log(image)
}; 



const stop =  (stream) =>  stream.getTracks().forEach(track => track.stop())

const on = (msg) => {
  _getStream(constraints)
  _ = console.log(msg)
  _ = D_record.innerHTML = "off"
}

const off = (msg,stream) => {
  _ = console.log(msg)
  _ = stop(stream)
  _ = D_record.innerHTML = "on"
  _ = console.log(D_canvas)
  _ = D_canvas.toDataURL("./")
}

const H_switch = () => ((msg,stream) =>((msg) => _ = { 
  
  on, off 

}[msg](msg,stream))(msg,stream))(D_record.innerHTML, _local_stream  )

function _H_log (){

}


export default function _(){
    return (
      <>
        <center>
        <video  id="D_video" playsInline autoPlay></video> 
        <canvas id="D_canvas" width="500" height="300"> </canvas>
        </center>
        <br></br>
        <button id="D_record" className="btn btn-outline-primary ml-2" onClick={H_switch} >on</button>
        <button id="D_capture" className="btn btn-outline-primary ml-2" onClick={H_capture} > capture </button>
        <button  className="btn btn-outline-primary ml-2"> <a id="D_Download" download="myImage.jpg" href="" onClick={H_Download}>Download</a> </button>
        <button id="D_log" className="btn btn-outline-primary ml-2" onClick={H_log} > log </button>
        <button id="D_post" className="btn btn-outline-primary ml-2" onClick={H_post} > post </button>

        <div id="D_errMsg"> </div>
        {/* <script src="index_video.js"></script> */}
      </>
      )
}




