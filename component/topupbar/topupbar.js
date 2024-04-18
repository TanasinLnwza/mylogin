import React, { useEffect } from "react";
import Itembox from "../itembox/itembox";
import Leftbar from "../leftbar/leftbar";
import styles from "./Styles.module.css";
import { useState } from "react";
import CartBar from "../cart/cartbar";
function topupbar() {
  return (
    <div
      style={{ width: "800px", height: "500px" }}
      className="border-none rounded-md bg-white"
    >
      <div
        style={{ textAlign: "center" }}
        className={`${styles.borderitem} shadow-md `}
      >
        {" "}
        เติมเงิน{" "}
      </div>
      <div
        style={{
          display: "flex",
          gap: "100px",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        {" "}
        <button className={`${(styles.button)}`}
          style={{
            boxShadow: "2px 4px 4px 1px rgba(0, 0, 0, 0.1)",
            padding: "40px",
          }}
        >
          {" "}
          <div style={{ width: "120px", height: "120px" }}>
            <img src="/images/logo/Truewallet.jpg"></img>
          </div>
          <div style={{ marginTop: "10px",textAlign: "center" }}>Truewallet </div>
        </button>
        <button className={`${(styles.button)}`}
          style={{
            boxShadow: "2px 4px 4px 1px rgba(0, 0, 0, 0.1)",
            padding: "40px",
          }}
        >
          {" "}
          <div style={{ width: "120px", height: "120px" }}>
            <img src="/images/logo/ThaiQR.jpg"></img>
          </div>
          <div style={{ marginTop: "10px",textAlign: "center" }}>Promptpay </div>
        </button>
      </div>
    </div>
  );
}

export default topupbar;
