'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useState } from 'react'
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
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        setUserData(responseData.userData);
        localStorage.setItem('userData', JSON.stringify(responseData.userData));
        router.push('/');
      } catch (error) {
        return error
      }
    };
  return (
    <div className="flex justify-center items-center h-[100vh]">
             {userData && userData[0].Username}
      <div className=" flex flex-col gap-2">
      <div className=" text-8xl text-center"><i class=" fa-solid fa-users"></i></div>
        {" "}
        <div className=" border-none bg-white rounded-full">
          {" "}<i className="fa-solid fa-user ml-2 pr-1"></i>
        |
          <input className=" rounded-full bg-transparent focus:outline-none  px-2.5" type="text" id="Username" value={username} onChange={handleChange} placeholder="Username"></input>
        </div>
        <div className=" border-none bg-white rounded-full">
        <i className="fa-solid fa-lock ml-2"></i>
          {" "}
        |
          <input className=" rounded-full bg-transparent focus:outline-none px-2.5 " type="password" value={password} onChange={handleChange} id="Password" placeholder="Password"></input>
        </div>
        <div >
          <button className="border-none bg-white/20 rounded-full p-1.5 w-[100%] text-white" onClick={loginapi} type="button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
