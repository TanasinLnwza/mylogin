"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";
import Boxpost from "../component/boxpost/boxpost";
import Itembar from "../component/itembar/itembar";
import Leftbar from "../component/leftbar/leftbar";
import Buttomweb from "../component/buttomweb/buttomweb";
import Cart from "../component/cart/cart";
export default function Home() {
  const router = useRouter();
  const userDataString = localStorage.getItem("userData");
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("userData");
    router.refresh(); // โหลดหน้าใหม่หลังจากล็อกเอาท์
  };
  const handleLogin = () => {
    router.push("/login");
  };
  const handleRegister = () => {
    router.push("/register");
  };
  const userhamberger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      {userData && (
        <div className=" bg-white fixed w-full flex justify-end items-center pr-4 p-2 drop-shadow-md">
          <button
            className={`${styles.hamburger} ${isOpen ? styles.open : ""} ${
              styles.button1
            }  flex p-2 rounded-md`}
            onClick={userhamberger}
          >
            {" "}
            <div>
              <div className=" ">{userData[0].Username}</div>
              <div className=" text-xs"> 0.00 Point</div>
            </div>
            <img
              className=" ml-2 w-10 h-10 rounded-full"
              src="/images/profile/profile1.png"
            ></img>
            <span className={`${styles.bar} opacity-0`}>
              <button className={`${styles.button12} w-full p-1`}>
                member
              </button>
              <button
                className={`${styles.button12} w-full p-1`}
                onClick={handleLogout}
              >
                logout
              </button>
            </span>
          </button>
            <Cart />
        </div>
      )}
      {!userData && (
        <div className=" bg-white fixed w-full flex justify-end items-center pr-4 p-2 drop-shadow-md">
          <div className=" rounded-full bg-slate-400/20">
            {" "}
            <button
              className="border-none bg-white shadow-md  rounded-full text-black p-2"
              onClick={handleLogin}
              type="button"
            >
              Login
            </button>
            <button
              className="border-none rounded-full text-black p-2"
              onClick={handleRegister}
              type="button"
            >
              Register
            </button>
          </div>
        </div>
      )}
      <div className=" bg-slate-200 h-auto">
        <div className="flex justify-center bg-white">
          <div className="w-100% h-60">
          </div>
        </div>
        <div className=" mt-4 flex justify-center">
          <div className=" ml-4 pr-10">
            <Leftbar />
          </div>
          <div className="pr-auto mr-20">
            {" "}
            <Itembar />
          </div>
        </div>
      </div>
      <Buttomweb />
    </div>
  );
}
