import React from "react";
import styles from "./Styles.module.css";
function leftbar() {
  return (
    <div className={`${styles.borderleftbar}`}>
      {" "}
      <div className={`${styles.topleftbar} p-1`}>ประเภทสินค้า</div>
      <div className=" p-2">
        {" "}
        <div>ไอดี</div>
        <div>โค้ด</div>
        <div>ไอเท็ม</div>
        <div>สุ่มกาชา</div>
      </div>
    </div>
  );
}

export default leftbar;
