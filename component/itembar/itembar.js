import React, { useEffect } from "react";
import Itembox from "../itembox/itembox";
import Leftbar from "../leftbar/leftbar";
import styles from "./Styles.module.css";
import { useState } from "react";
import CartBar from "../cart/cartbar";
function itembar() {
  const [itemCart, setItemCart] = useState([]);
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
  const itemsData = [
    {
      name: "coke",
      img: '/images/items/coke.jpg',
      des: 'soda drink coke classic ',
      price: 100,
      quantity: 1
    },
    {
      name: "ramen Teriyaki",
      img: '/images/items/ramen1.jpg',
      des: 'ponk needle',
      price: 100,
      quantity: 1
    },
    {
      name: "ramen chicken",
      img: '/images/items/ramen2.jpg',
      des: 'soda drink water ',
      price: 100,
      quantity: 1
    },
    {
      name: "aw soda",
      img: '/images/items/aw.png',
      des: 'sdff',
      price: 100,
      quantity: 1
    }
  ];
  useEffect(() =>{
console.log(itemCart)
  },
[itemCart])
  return (
    <div className="border-none rounded-md bg-white ">
      <div className= {`${styles.borderitem} shadow-md`}> item </div>
      <div className={`${styles.Itembar}`}>
        <div className={`${styles.Itembox }` }>
        <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
        </div>
        <div className={`${styles.Itembox }` }>
        <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
        </div>
        <div className={`${styles.Itembox }` }>
        <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
        </div>
        <div className={`${styles.Itembox }` }>
        <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
        </div>

        <div className={`${styles.Itembox }` }>
        <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
        </div>
        <div className={`${styles.Itembox }` }>
        <Itembox items={[itemsData[2]]} itemToCart={handleItemToCart} />
        </div>
        <div className={`${styles.Itembox }` }>
        <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
        </div>
        
      </div>
    </div>
  );
}

export default itembar;