import React from 'react'
const H_post = () => {
  var image = D_canvas.toDataURL("image/jpg");
  console.log(image)
}; 


export default function _(){
    return(
        <>
              <button id="D_post" className="btn btn-outline-primary ml-2" onClick={H_post} > post </button>

      </>
    )
}