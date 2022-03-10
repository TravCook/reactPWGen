import React from 'react'
import "./passwordOutput.css"

function passwordOutput(){
  return (
    <div className="parentContainer container-fluid">
      <div className="row justify-content-center">
        <div className="col-6 textOutput">Placeholder for now</div>
      </div>
      <div className="row">
        <div className="col">Lowercase?</div>
        <div className="col">Uppercase?</div>
      </div>
      <div className="row">
        <div className="col">Number?</div>
        <div className="col">Special Char?</div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6 textOutput">length: </div>
      </div>
      <div className="row justify-content-center">
        <button className="col-6 ">submit</button>
      </div>
    </div>
  )
}

export default passwordOutput