import React from 'react'
const H_log = () => console.log(1);


export default function _(){
    return(
        <>
      <button id="D_log" className="btn btn-outline-primary ml-2" onClick={H_log} > log </button>
      </>
    )
}