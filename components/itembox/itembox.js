import React, { useEffect } from "react";
import styles from "./Styles.module.css";
import { useState } from 'react'
function itembox ({ items, itemToCart }) {
  const handlepayment = (item) =>{
    itemToCart(item);
  }
  const handlebuy =() =>{
    console.log()
  }

  
    return ( 
      <div className={`${(styles.baseborder)}`}>
        {items.map((item, index) => (
          <div key={index}>
            <div className="">
              <div>
                {" "}
                <img
                  className={` ${styles.imgitem} ${styles.shadowborder} p-2  `}
                  src={item&&item.img}
                ></img>
                <div className={`${styles.topshadowborder}`}>{item&&item.name}</div>
              </div>
              <div
                className={`mt-1 text-center ${styles.shadowborder}  text-xs`}
              >
                {item&&item.price} point
              </div>
              <button
                className={`${(styles.button, styles.button1)} p-1 mt-1 w-full`}
                onClick={handlebuy}
              >
                Buy
              </button>
              <div>
                <button
                  className={`${
                    (styles.button, styles.button1)
                  } p-1 mt-1 w-full`}
                  onClick={() => handlepayment(item)}
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default itembox;