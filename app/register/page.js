"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Styles.module.css";
import { useRouter } from "next/navigation";
export default function Register() {
  const router = useRouter();
  const [userData, setUserData] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [Emails, setEmails] = useState("");
  const [message, setMessage] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerWait, setRegisterWait] = useState(false);
  function ValidateEmail(Emails) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Emails)) {
      return true;
    }
    return false;
  }
  
  const handleChange = (event) => {
    switch (event.target.id) {
      case "Username":
        setUsername(event.target.value);
        break;
      case "Password":
        setPassword(event.target.value);
        console.log(password);
        break;
      case "ConfirmPassword":
        setConfirmPassword(event.target.value);
        break;
      case "Emails":
        setEmails(event.target.value);
        break;
      default:
        break;
    }
  };
  const handleChangepassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };
  const onRegister = (event) => {
    console.log(username, password, Confirmpassword, Emails);
  };
  const postData = async () => {
    try {
      if (!registerWait) {
        setRegisterWait(true);
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            email: Emails,
          }),
        });
        const responseData = await response.json();
        setUserData(responseData.userData);
        setMessage(responseData.message);
        if (response.ok) {
          setRegisterSuccess(true);
          console.log("RS:",registerSuccess)
        }
      }
      else{
        console.log("Register Wait...")
      }
    } catch (error) {
      console.error("Error while posting data:", error);
    }
  };
  

  useEffect(() => {
    if (registerSuccess) {
      setRegisterWait(false);
      const loginapi = async () => {
        console.log("Test api");
        try {
          const response = await fetch(
            `/api/login?username=${username}&password=${Confirmpassword}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.ok) {
            const responseData = await response.json();
            setUserData(responseData.userData);
            localStorage && localStorage.setItem("userData", JSON.stringify(responseData.userData));
            if (responseData.message === "Login failed") { // แก้ชื่อ property จาก 'massage' เป็น 'message'
            } else {
              if (responseData.userData) { // ป้องกันการเข้าถึง property ที่อาจไม่มีอยู่
                router.push("/");
              }
            }
          } else {
            console.log("Response not ok");
          }
        } catch (error) {
          return error;
        }
      };
      loginapi();
    }
  }, [registerSuccess]);

  useEffect(() => {
    const isValid = ValidateEmail(Emails);
    const emailsx = document.getElementById("emailsx");
    if (isValid) {
      emailsx.style.opacity = "0";
    } else {
      emailsx.style.opacity = "1";
    }
  }, [Emails]);

  useEffect(() => {
    const Registerbutton = document.getElementById("Registerbutton");
    if (registerWait) {
      Registerbutton.style.opacity = "0";
    } else {
      Registerbutton.style.opacity = "1";
    }
  }, [registerWait]);

  useEffect(() => {
    const cfpassx = document.getElementById("cfpassx");
    if (password === Confirmpassword) {
      cfpassx.style.opacity = "0";
    } else {
      cfpassx.style.opacity = "1";
    }
  }, [password, Confirmpassword]);
  useEffect(() => {
    if (message.includes("RegisterFailed")){
      setRegisterWait(false);
    }
    console.log(message);
  }, [message]);
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className=" flex flex-col gap-2">
        <div className=" text-8xl text-center">
          <i class=" fa-solid fa-users"></i>
        </div>{" "}
        <div className="flex justify-center items-center">
          <div className=" border-solid shadow-sm bg-white rounded-full">
            {" "}
            <i className="fa-solid fa-user ml-2 pr-1"></i>|
            <input
              className=" rounded-full bg-transparent focus:outline-none  px-2.5 text-xs "
              type="text"
              id="Username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
            ></input>
            <i
              className={`p-1 mr-1 fa-solid fa-xmark ${
                message.includes("ชื่อผู้ใช้") ? "opacity-1" : "opacity-0"
              }`}
            ></i>
          </div>
        </div>
        <div className=" border-solid shadow-sm bg-white rounded-full ">
          <i className="fa-solid fa-lock ml-2"></i> |
          <input
            className=" rounded-full bg-transparent focus:outline-none px-2.5 text-xs"
            type="password"
            id="Password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          ></input>
        </div>
        <div className=" border-solid shadow-sm bg-white rounded-full">
          <i className="fa-solid fa-lock ml-2"></i> |
          <input
            className=" rounded-full bg-transparent focus:outline-none px-2.5 text-xs"
            type="password"
            id="ConfirmPassword"
            value={Confirmpassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          ></input>
          <i
            className={`p-1 mr-1 fa-solid fa-xmark opacity-0`}
            id="cfpassx"
          ></i>
        </div>
        <div className=" border-solid shadow-sm bg-white rounded-full">
          <i className="fa-solid fa-envelope ml-2"></i> |
          <input
            className=" rounded-full bg-transparent focus:outline-none px-2.5 text-xs "
            type="text"
            id="Emails"
            value={Emails}
            onChange={handleChange}
            placeholder="Email"
          ></input>
             <i
            className={`p-1 mr-1 fa-solid fa-xmark opacity-0`}
            id="emailsx"
          ></i>
        </div>
        <div>
          <button
            className={`border-none rounded-full ${styles.button} p-1.5 w-[100%] text-white `}
            id="Registerbutton"
            onClick={() => {
              if (password === Confirmpassword) {
                if (username.length > 4 && password.length > 4) {
                  postData();
                } else {
                  console.log("Username or password must > 4 ");
                }
              } else {
                console.log("Password does not match");
              }
            }}
            type="button"
          >
            <span>Register</span>
          </button>
        </div>
      </div>
    </div>
  );
}
