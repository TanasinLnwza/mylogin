"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Styles.module.css";
import Buttomweb from "../../components/buttomweb/buttomweb";
import Swal from 'sweetalert2'
export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginstate, setLoginstate] = useState(true);
  const handleChange = (event) => {
    switch (event.target.id) {
      case "Username":
        setUsername(event.target.value);
        break;
      case "Password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  };
  const login = () => {
    if (loginstate) {
      fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          //"expiresIn": 800000
        }),
      })
        .then((Response) => {
          if (Response.ok) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "success",
              title: "Signed in successfully",
            });
            setLoginstate(false)
            return Response.json();
          } else {
            console.log("respon not ok!");
          }
        })
        .then((dataUser) => {
          localStorage.setItem("Token", dataUser.token);
          setLoginstate(true)
          router.push("/");
        });
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className=" flex flex-col gap-2">
        <div className=" text-8xl text-center">
          <i class=" fa-solid fa-users"></i>
        </div>{" "}
        <div className=" border-solid shadow-sm bg-white rounded-full mt-4">
          <div className={` text-red-500 ${loginstate ? "hidden" : ""}`}>
            ล็อคอินล้มเหลว
          </div>{" "}
          <i className="fa-solid fa-user ml-2 pr-1 "></i>|
          <input
            className=" rounded-full bg-transparent focus:outline-none  px-2.5 text-xs"
            type="text"
            id="Username"
            value={username}
            onChange={handleChange}
            placeholder="Username"
          ></input>
        </div>
        <div className=" border-solid shadow-sm bg-white rounded-full mt-1">
          <i className="fa-solid fa-lock ml-2 mt-1"></i> |
          <input
            className=" rounded-full bg-transparent focus:outline-none px-2.5 text-xs	 "
            type="password"
            value={password}
            onChange={handleChange}
            id="Password"
            placeholder="Password"
          ></input>
        </div>
        <div>
          <button
            className={`border-none ${styles.button} rounded-full p-1.5 w-[100%] text-white`}
            onClick={login}
            type="button"
          >
            <span>Login </span>
          </button>
        </div>
      </div>
    </div>
  );
}
