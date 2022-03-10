import React, { useState } from 'react'
import "./passwordOutput.css"

function PasswordOutput(){
  const [lowerCheck, setlowerCheck] = useState(false)
  const [upperCheck, setupperCheck] = useState(false)
  const [numberCheck, setnumberCheck] = useState(false)
  const [specialCheck, setspecialCheck] = useState(false)

  const handleLCchange = () => {
    setlowerCheck(!lowerCheck)
  }
  const handleUCchange = () => {
    setupperCheck(!upperCheck)
  }
  const handleNumchange = () => {
    setnumberCheck(!numberCheck)
  }
  const handleSpecchange = () => {
    setspecialCheck(!specialCheck)
  }

  const handlesubmit = () => {
    console.log("lower:" + lowerCheck)
    console.log("upper:" +upperCheck)
    console.log("number:" +numberCheck)
    console.log("special:" +specialCheck)
  }

  return (
    <div className="container-fluid parentContainer">
      <div className="row justify-content-center">
        <div className="col-6 textOutput">Placeholder for now</div>
      </div>
      <div className="row optionRow">
        <div className="col">
          <label>
            <input 
              type="checkbox"
              checked={lowerCheck}
              onChange={handleLCchange} />
            Lowercase
          </label>
        </div>
        <div className="col">
          <label>
            <input 
              type="checkbox"
              checked={upperCheck}
              onChange={handleUCchange} />
            Uppercase
          </label>
        </div>
      </div>
      <div className="row optionRow">
        <div className="col">
          <label>
            <input 
              type="checkbox"
              checked={numberCheck}
              onChange={handleNumchange} />
            Number
          </label>
        </div>
        <div className="col">
          <label>
            <input 
              type="checkbox"
              checked={specialCheck}
              onChange={handleSpecchange} />
            Special Character
          </label>
        </div>
      </div>
      <div className="row optionRow">
        <div className="col-6">length: </div>
      </div>
      <div className="row justify-content-center">
        <button className="col-6 btn btn-primary" onClick={handlesubmit}>submit</button>
      </div>
    </div>
  )
}

export default PasswordOutput