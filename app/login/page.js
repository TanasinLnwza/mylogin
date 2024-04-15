'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from "./Styles.module.css"
import Buttomweb from "../../component/buttomweb/buttomweb";
export default function Login() {
  const router = useRouter();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");
  const handleChange =(event) =>{
    switch(event.target.id){
      case "Username":
        setUsername(event.target.value)
        break
        case "Password":
          setPassword(event.target.value)
          break
          default:
            break;
      }
    }
    const loginapi = async () => {
      console.log("Test api")
      try {
        const response = await fetch(`/api/login?username=${username}&password=${password}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        if (response.ok) {
          const responseData = await response.json();
          setUserData(responseData.userData);
          localStorage.setItem('userData', JSON.stringify(responseData.userData));
          if (responseData.userData.length > 0) {
            router.push('/');
          }
        }
        else{
          console.log("Respone not ok")
        }    
      } catch (error) {
        return error
      }
    };
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className=" flex flex-col gap-2">
      <div className=" text-8xl text-center"><i class=" fa-solid fa-users"></i></div>
        {" "}
        <div className=" border-solid shadow-sm bg-white rounded-full mt-4">
          {" "}<i className="fa-solid fa-user ml-2 pr-1 "></i>
        |
          <input className=" rounded-full bg-transparent focus:outline-none  px-2.5 text-xs" type="text" id="Username" value={username} onChange={handleChange} placeholder="Username"></input>
        </div>
        <div className=" border-solid shadow-sm bg-white rounded-full mt-1">
        <i className="fa-solid fa-lock ml-2 mt-1"></i>
          {" "}
        |
          <input className=" rounded-full bg-transparent focus:outline-none px-2.5 text-xs	 " type="password" value={password} onChange={handleChange} id="Password" placeholder="Password"></input>
        </div>
        <div >
          <button className={`border-none ${styles.button} rounded-full p-1.5 w-[100%] text-white`} onClick={loginapi} type="button">
          <span>Login </span>
          </button>
        </div>
      </div>
    </div>
  );
}
