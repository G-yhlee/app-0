```js
const video = document.getElementById('video');
const capture = document.getElementById('capture');
const canvas = document.getElementById('canvas');
const errMsg = document.getElementById('errMsg');
const VisitorChecker = document.getElementById('VisitorChecker');


async function init(){
  const constraints = {
    audio: true,
    video: {
      width: 1200, height: 720
    }
  }
  try{
    // const stream = 
    // console.log(stream)
    // handleSuccess(stream)
    video.srcObject = await navigator.mediaDevices.getUserMedia(constraints);;

  }catch(e){
    errMsg.innerHTML = `navigator.getUserMedia.error:${e.toString()}`
  }
}


// function handleSuccess(stream){
//   // window.stream= stream; // 지워도 동작해
//   video.srcObject = stream;
//   console.log(video.srcObject)
// }

init();

capture.addEventListener("click",function(){
  var context = canvas.getContext('2d');
  context.drawImage(video,0,0,640,480);
})

VisitorChecker.addEventListener("click",function(){
  init();
  // location.reload()
})