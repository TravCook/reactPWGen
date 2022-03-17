import React, { useState } from 'react'
import "./passwordOutput.css"
import Form from "react-bootstrap/Form"

function PasswordOutput(){
  const [lowerCheck, setlowerCheck] = useState(false)
  const [upperCheck, setupperCheck] = useState(false)
  const [numberCheck, setnumberCheck] = useState(false)
  const [specialCheck, setspecialCheck] = useState(false)
  const [length, setlength] = useState(0)
  let passwordArr = []
  const [password, setPass] = useState("Your password here")

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
  const handleLengthChange = (e) => {
    setlength(e.target.value)
  }

  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randChar = arr[randIndex];
  
    return randChar;
  }

  const handlesubmit = () => {
    const uppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
    const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    let possibleCharacters = []
    if(lowerCheck){
      possibleCharacters = possibleCharacters.concat(lowCase)
    }
    if(upperCheck){
      possibleCharacters = possibleCharacters.concat(uppCase)
    }
    if(specialCheck){
      possibleCharacters = possibleCharacters.concat(special)
    }
    if(numberCheck){
      possibleCharacters = possibleCharacters.concat(number)
    }
    console.log(possibleCharacters)
    console.log("Length: "+ length)
    for(let i=0; i<length; i++){
      passwordArr.push(getRandom(possibleCharacters))
    }
    console.log(passwordArr)
    setPass(passwordArr.join(""))
    
  }

  return (
    <div className="container-fluid parentContainer">
      <div className="row justify-content-center">
        <div className="col-6 textOutput">{password}</div>
      </div>
      <Form>
        <div className="row optionRow">
          <Form.Group controlId="formLowercase" className="col">
            <Form.Check 
              type="checkbox"
              checked={lowerCheck}
              onChange={handleLCchange}
              label="Lowercase Letters" />
          </Form.Group>
          <Form.Group className="col">
            <Form.Check 
              type="checkbox"
              checked={upperCheck}
              onChange={handleUCchange}
              label="Uppercase Letters" />
          </Form.Group>
        </div>
        <div className="row optionRow">
          <Form.Group className="col">
            <Form.Check 
              type="checkbox"
              checked={numberCheck}
              onChange={handleNumchange}
              label="Numbers" />
          </Form.Group>
          <Form.Group className="col">
            <Form.Check 
              type="checkbox"
              checked={specialCheck}
              onChange={handleSpecchange}
              label="Special Characters" />
          </Form.Group>
        </div>
        <Form.Group>
          <Form.Label>Password Length: </Form.Label>
          <Form.Control 
            onChange={handleLengthChange} 
            type="text" 
            placeholder="please enter a number between 8 and 128" />
        </Form.Group>
      </Form>
      
      <div className="row justify-content-center">
        <button className="col-6 btn btn-primary" onClick={handlesubmit}>submit</button>
      </div>
    </div>
  )
}

export default PasswordOutput