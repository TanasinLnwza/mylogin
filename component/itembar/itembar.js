import React, { useEffect } from "react";
import Itembox from "../itembox/itembox";
import Leftbar from "../leftbar/leftbar";
import styles from "./Styles.module.css";
import { useState } from "react";
import CartBar from "../cart/cartbar";
function itembar({itemsData,handleItemToCart}) {
  const itemsData2 = [
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
  return (
    <div className="border-none rounded-md bg-white ">
      <div className= {`${styles.borderitem} shadow-md`}> item </div>
      <div className={`${styles.Itembar}`}>
     <img src=""></img>
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
        <Itembox items={[itemsData[1]]} itemToCart={handleItemToCart} />
        </div>
        <div className={`${styles.Itembox }` }>
        <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
        </div>
        
      </div>
    </div>
  );
}

export default itembar;