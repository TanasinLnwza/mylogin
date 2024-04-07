'use client'
import Image from "next/image";
import { useState } from 'react'
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [Emails, setEmails] = useState("");
  const handleChange =(event) =>{
    switch(event.target.id){
      case "Username":
        setUsername(event.target.value)
        break
        case "Password":
          setPassword(event.target.value)
          break
          case "ConfirmPassword":
          setConfirmPassword(event.target.value)
          break
          case "Emails":
          setEmails(event.target.value)
          break
          default:
          break;
    }
  
    
  };
  const onRegister =(event) =>{
console.log(username,password,Confirmpassword,Emails)
  };
  const postData = async () => {
    console.log("Test api")
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password:password, email:Emails })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-[100vh]">
             
      <div className=" flex flex-col gap-2">
      <div className=" text-8xl text-center"><i class=" fa-solid fa-users"></i></div>
        {" "}
        <div className=" border-none bg-white rounded-full">
          {" "}<i className="fa-solid fa-user ml-2 pr-1"></i>
        |
          <input className=" rounded-full focus:outline-none  px-2.5" type="text" id="Username" value={username} onChange={handleChange} placeholder="Username"></input>
        </div>
        <div className=" border-none bg-white rounded-full">
        <i className="fa-solid fa-lock ml-2"></i>
          {" "}
        |
          <input className=" rounded-full bg-transparent focus:outline-none px-2.5 " type="password" id="Password" value={password} onChange={handleChange} placeholder="Password"></input>
        </div>
        <div className=" border-none bg-white rounded-full">
        <i className="fa-solid fa-lock ml-2"></i>
          {" "}
        |
          <input className=" rounded-full bg-transparent focus:outline-none px-2.5 " type="password" id="ConfirmPassword" value={Confirmpassword} onChange={handleChange} placeholder="Confirm Password"></input>
        </div>
        <div className=" border-none bg-white rounded-full">
        <i className="fa-solid fa-envelope ml-2"></i>
          {" "}
        |
          <input className=" rounded-full bg-transparent focus:outline-none px-2.5 " type="text" id="Emails" value={Emails} onChange={handleChange} placeholder="Email"></input>
        </div>
        <div >
          <button className="border-none bg-white/20 rounded-full p-1.5 w-[100%] text-white" onClick={postData} type="button">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
