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
  const userDataString = localStorage && localStorage.getItem("userData");
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const [isOpen, setIsOpen] = useState(false);
  const [itemCart, setItemCart] = useState([]);
  const [itemsData, setItemsData] = useState([]);
  const getitemdataapi = async () => {
    console.log("data api")
    try {
      const response = await fetch(`/api/getitemdata`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        setItemsData(responseData.itemsData)
      }
    } catch (error) {
      return error
    }
  };
  useEffect(() => {
    console.log('Component loaded');
    getitemdataapi()
  }, []);

  useEffect(()=>
  {
console.log(itemsData)
  },[itemsData]
);
  const handleItemToCart = (itemToAdd) => {
    const existingItemIndex = itemCart.findIndex(item => item.name === itemToAdd.name);
    if (existingItemIndex !== -1) {
      // หากมี item นี้ในตะกร้าอยู่แล้ว
      const updatedItemCart = [...itemCart];
      updatedItemCart[existingItemIndex].quantity += 1;
      setItemCart(updatedItemCart);
    } else {
      // หากยังไม่มี item นี้ในตะกร้า
      setItemCart([...itemCart, { ...itemToAdd, quantity: 1 }]);
    }}
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
  const handleTopup = () => {
    router.push("/topup");
  };
  
  const handleHome = () => {
    router.push("/");
  };
  const handleMember = () => {
    router.push("/member");
  };
  const userhamberger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">

      {userData && (
        <div style={{zIndex: 2 }} className=" bg-white fixed w-full flex justify-end items-center pr-4 p-2 drop-shadow-md">
          <button className=" absolute left-5 text-lg font-bold" onClick={handleHome}>LOGO</button>
          <button
            className={`${styles.hamburger} ${isOpen ? styles.open : ""} ${
              styles.button1
            }  flex p-2 rounded-md`}
            onClick={userhamberger}
          >
            {" "}
            <div>
              <div className=" ">{userData[0].Username}</div>
              <div className=" text-xs">{userData[0].point}</div>
            </div>
            <img
              className=" ml-2 w-10 h-10 rounded-full"
              src="/images/profile/profile1.png"
            ></img>
            <span className={`${styles.bar} opacity-0`}>
              <button onClick={handleMember} className={`${styles.button12} w-full p-1`}>
                member
              </button>
              <button className={`${styles.button12} w-full p-1`} onClick={handleTopup}>
                เติมเงิน
              </button>
              <button
                className={`${styles.button12} w-full p-1`}
                onClick={handleLogout}
              >
                logout
              </button>
            </span>
          </button>
            <Cart itemCart={itemCart} />
        </div>
      )}
      {!userData && (
        <div  style={{zIndex: 2 }} className=" bg-white fixed w-full flex justify-end items-center pr-4 p-2 drop-shadow-md">
          <div className=" absolute left-5 text-lg font-bold">LOGO</div>
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
      <div className=" bg-slate-200 ">
        <div className=" bg-white">
          <div style={{paddingTop:'80px'}}> <Boxpost /></div>
          <div className="w-100% ">
          </div>
        </div>
        <div className=" mt-4 flex justify-center">
          <div className=" ml-4 pr-10">
            <Leftbar />
          </div>
          <div className="pr-auto mr-20 mb-10">
            {" "}
            <Itembar itemsData={itemsData} handleItemToCart={handleItemToCart} />
          </div>
        </div>
      </div>
      
      <Buttomweb />
    </div>
  );
}
