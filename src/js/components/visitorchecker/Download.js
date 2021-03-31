import React from 'react'
const H_Download = () => {
  let D_Download = document.getElementById("D_Download");
  var image = D_canvas.toDataURL("image/jpg");
  console.log(image)
  D_Download.href = image;
}; 



export default function _(){
    return(
    <>
      <button  className="btn btn-outline-primary ml-2"> 
        <a id="D_Download" download="myImage.jpg" href="" onClick={H_Download}>Download</a> 
      </button>
    </>
    )
}