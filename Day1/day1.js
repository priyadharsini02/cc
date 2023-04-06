import React from "react";
import './day1.css';

const alertBox=()=>{
    alert('Message from Javascript Developer');
}
const console_ =()=>{
    console.log("Message to Developer");
}
const myarray=['a','e','i','o','u'];
const check=()=>{
    alert("Check console");
    myarray.push();
    console.log(myarray);
}
export default function Day1() {
  return (
    <div id="day1"><center>
    <br></br><br></br>
    <button onClick={alertBox}>Click Me</button><br></br><br></br>
    <button onClick={console_}>Click Me</button><br></br><br></br>
    <button onClick={check}>Click Me</button><br></br><br></br>
    </center>
    </div>
  )
}