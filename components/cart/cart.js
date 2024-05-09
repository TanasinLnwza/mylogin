import React from "react";
import styles from "./Styles.module.css";
import CartBar from "./cartbar";
import CartBarQuantity from "./cartbarquantity";
import CartBarPrice from "./cartbarprice";

function Cart({ itemCart }) {
  // ฟังก์ชันสำหรับคำนวณราคารวมของสินค้าทั้งหมด
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    if (itemCart && itemCart.length > 0) {
      itemCart.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });
    }
    return totalPrice;
  };

  return (
    <div>
      <div className="">
        <button className={`${styles.cart}`}>
          <div className=" pr-2">
            {" "}
            <i className="fa-solid fa-cart-shopping p-1 ml-2 text-2xl pb-4 pt-4"></i>
            {itemCart && itemCart.length}
          </div>
        </button>
        <div
          className={` ${styles.cartbar} h-40 bg-white rounded-md absolute flex flex-col justify-center items-center`}
        >
          <div className={` ${styles.scrollbar} flex `}>
            <div className=" flex flex-col">
              <div className="sticky top-0 bg-white shadow-md">สินค้า</div>
              <div className=" static">
                <CartBar itemCart={itemCart} />
              </div>
            </div>
            <div className=" flex flex-col">
              <div className="sticky top-0 bg-white shadow-md">จำนวน</div>
              <CartBarQuantity itemCart={itemCart} />
            </div>
            <div className=" flex flex-col">
              <div className="sticky top-0 bg-white shadow-md">ราคา</div>
              <CartBarPrice itemCart={itemCart} />
            </div>
          </div>
          <div className="shadow-lg">รวม: {calculateTotalPrice()} point</div>
          <button
            style={{
              background: "#00b667 ",
              width: "100%",
              borderRadius: "0px 0 4px 4px ",
              color: "white",
            }}
            className={`${styles.button1}`}
          >
            ชำระเงิน
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
