import React from "react";
import styles from "./Styles.module.css";
import CartBar from "./cartbar";
function cart({ itemCart }) {
  return (
    <div>
      <div className="">
        <button className={`${styles.cart}`}>
          <div className=" pr-2">
            {" "}
            <i className="fa-solid fa-cart-shopping p-1 ml-2 text-2xl pb-4 pt-4"></i>
            {itemCart.length}
          </div>
        </button>
        <div
          className={` ${styles.cartbar} h-40 bg-white rounded-md absolute flex flex-col justify-center items-center`}
        >
          <div style={{gap:'20px'}} className="p-1 flex">
            สินค้า
            <div>จำนวน</div>
            <div>ราคา</div>
          </div>
          <div className="">
            <CartBar itemCart={itemCart} />
          </div>
          <button style={{background:"#00b667	", width:'100%',borderRadius:"0px 0 4px 4px ", color:'white'}} className={`${(styles.button1)}`}>ชำระเงิน</button>
        </div>
      </div>
    </div>
  );
}

export default cart;
