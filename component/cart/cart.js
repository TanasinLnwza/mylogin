import React from 'react'
import styles from "./Styles.module.css";
import CartBar from './cartbar';
function cart({ itemCart }) {
    
  return (
<div>
<div className="">
            <button className={`${styles.cart}`}>
              <div className=" pr-2">
                {" "}
                <i className="fa-solid fa-cart-shopping p-1 ml-2 text-2xl pb-4 pt-4"></i>
                0
              </div>
            </button>
            <div
              className={` ${styles.cartbar} h-40 bg-white w-40 right-1 top-14 rounded-md absolute flex flex-col justify-center items-center`}
            >
              <div className="p-1">สินค้า</div>
              <div className="h-20"><CartBar itemCart={itemCart} /></div>
              <button className="">ชำระเงิน</button>
            </div>
          </div>
</div>
  )
}

export default cart