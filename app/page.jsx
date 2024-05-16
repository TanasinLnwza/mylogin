"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";
import Boxpost from "../components/boxpost/boxpost";
import Itembar from "../components/itembar/itembar";
import Leftbar from "../components/leftbar/leftbar";
import Buttomweb from "../components/buttomweb/buttomweb";
import Cart from "../components/cart/cart";
export default function Home() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(true);
  const [user, setUser] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [Category, setCategory] = useState("typeA");
  const [cartData, setCartData] = useState({
    itemCart: [],
    cartKey: "null",
  });

  const [cartDataAll, setCartDataAll] = useState([]);
  const [itemsData, setItemsData] = useState([]);
  const cartKeyIndex = cartDataAll.findIndex((cart) => {
    if (user && user.username) {
      return cart.cartKey === user.username;
    } else {
      return false;
    }
  });
  const [cartUser, setCartUser] = useState([]);
  const handleCategoryChange = (category) => {
    setCategory(category); // Update Category state
  };
  const getitemdataapi = async () => {
    console.log("data api");
    try {
      const response = await fetch(`/api/getitemdata`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        setItemsData(responseData.itemsData);
      }
    } catch (error) {
      return error;
    }
  };

  const aunth = () => {
    let token = localStorage.getItem('Token') || "null";
    fetch('/api/aunth', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      },
    })
      .then(Response => {
        if (Response.ok) {
          return Response.json();
        }
        else {
          console.log("not Response")
        }
      })

      .then(result => {
        if (result) {
          setUser(result.decoded);
          setIsLoaded(false);
          console.log("resul",result.decoded)
        }
        else {
          setUser(null);
        }
      })
  }

  useEffect(() => {
    aunth();
    console.log("Component loaded");
    getitemdataapi();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    const storedCartDataAll = JSON.parse(localStorage.getItem("CartAll"));
    if (!storedCartDataAll || storedCartDataAll.length === 0) {
      if (cartDataAll.length === 0) {
        console.log("cartDataAllsetFound:");
      } else {
        localStorage.setItem(`CartAll`, JSON.stringify({ cartDataAll }));
        console.log("cartDataAllsetLoad:", cartDataAll);
        setCartUser(cartDataAll[cartKeyIndex].itemCart);
      }
    } else {
      if (cartDataAll.length === 0) {
        setCartDataAll(storedCartDataAll.cartDataAll);
        console.log("cartDataAllset1:", cartDataAll);
      } else {
        localStorage.setItem(`CartAll`, JSON.stringify({ cartDataAll }));
        console.log("cartDataAllsetLoad:", cartDataAll);
        setCartUser(cartDataAll[cartKeyIndex].itemCart);
      }
    }
  }, [cartDataAll]);

  useEffect(() => {
    const storedCartData = JSON.parse(localStorage.getItem("Cart")) || cartData;
    setCartData(storedCartData);
  }, []);
  const handleItemToCart = (itemToAdd) => {
    const existingItemIndex = cartData.itemCart.findIndex(
      (item) => item.name === itemToAdd.name
    );
    if (existingItemIndex !== -1) {
      const updatedItemCart = [...cartData.itemCart];
      updatedItemCart[existingItemIndex].quantity += 1;
      setCartData((prevState) => ({
        ...prevState,
        itemCart: updatedItemCart,
      }));
      localStorage.setItem(
        `Cart`,
        JSON.stringify({ ...cartData, itemCart: updatedItemCart })
      );
    } else {
      // เพิ่มสินค้าใหม่ลงในตะกร้า
      const newItemCart = [...cartData.itemCart, { ...itemToAdd, quantity: 1 }];
      setCartData((prevState) => ({
        ...prevState,
        itemCart: newItemCart,
        cartKey: userData ? userData.Username : "",
      }));
      localStorage.setItem(
        `Cart`,
        JSON.stringify({
          ...cartData,
          itemCart: newItemCart,
          cartKey: userData ? userData.Username : "",
        })
      );

      if (cartKeyIndex === -1) {
        setCartDataAll((prevState) => [
          ...prevState,
          {
            itemCart: newItemCart,
            cartKey: userData.Username,
          },
        ]);
      } else {
        setCartDataAll((prevState) => {
          // คัดลอก prevState ไว้ก่อน
          const updatedCartDataAll = [...prevState];
          // กำหนดค่า itemCart ใน index ที่ 1 เป็น []
          updatedCartDataAll[cartKeyIndex].itemCart = newItemCart;
          // คืนค่า updatedCartDataAll ที่มีการเปลี่ยนแปลง
          return updatedCartDataAll;
        });
        
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("Token");
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
  if (isLoaded) {
    <div>Loading...</div>
  }
  return (
    <div className="">
      {user && (
        <div
          style={{ zIndex: 2 }}
          className=" bg-white fixed w-full flex justify-end items-center pr-4 p-2 drop-shadow-md"
        >
          <button
            className=" absolute left-5 text-lg font-bold"
            onClick={handleHome}
          >
            LOGO
          </button>
          <button
            className={`${styles.hamburger} ${isOpen ? styles.open : ""} ${
              styles.button1
            }  flex p-2 rounded-md`}
            onClick={userhamberger}
          >
            {" "}
            <div>
              <div className=" ">{user.username}</div>
              <div className=" text-xs">{user.userpoint} point</div>
            </div>
            <img
              className=" ml-2 w-10 h-10 rounded-full"
              src="/images/profile/profile1.png"
            ></img>
            <span className={`${styles.bar} opacity-0`}>
              <button
                onClick={handleMember}
                className={`${styles.button12} w-full p-1`}
              >
                member
              </button>
              <button
                className={`${styles.button12} w-full p-1`}
                onClick={handleTopup}
              >
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
          <Cart itemCart={cartUser} />
        </div>
      )}
      {!user && (
        <div
          style={{ zIndex: 2 }}
          className=" bg-white fixed w-full flex justify-end items-center pr-4 p-2 drop-shadow-md"
        >
          <button
            className=" absolute left-5 text-lg font-bold"
            onClick={handleHome}
          >
            LOGO
          </button>
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
      <div className=" bg-slate-200">
        <div className=" bg-white">
          <div style={{ paddingTop: "80px" }}>
            {" "}
            <Boxpost />
          </div>
          <div className="w-100% "></div>
        </div>
        <div className=" mt-4 flex justify-center flex-col content-center lg:flex-row">
          <div className=" ml-4 pr-10 hidden lg:block ">
            <Leftbar onCategoryChange={handleCategoryChange} />
          </div>
          <div className="pr-auto mb-10 lg:mr-20">
            {" "}
            <Itembar
              itemsData={itemsData}
              handleItemToCart={handleItemToCart}
              Category={Category}
              TohandleCategoryChange={handleCategoryChange}
            />
          </div>
        </div>
      </div>
      <Buttomweb />
    </div>
  );
}
