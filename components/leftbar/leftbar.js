import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";

function LeftBar({onCategoryChange}) { // Changed function name to start with lowercase
  const handleCategory = (number) => { // Corrected function name
    onCategoryChange(number); // Update Category state with the selected number
  };
  return (
    <div className={`${styles.borderleftbar}`}>
      <div className={`${styles.topleftbar} p-1`}>ประเภทสินค้า</div>
      <div className="p-2">
        {/* Corrected onClick handlers to pass functions */}
        <div><button onClick={() => handleCategory("typeA")}>typeA</button></div>
        <div><button onClick={() => handleCategory("typeB")}>typeB</button></div>
        <div><button onClick={() => handleCategory("typeC")}>typeC</button></div>
        <div><button onClick={() => handleCategory("typeD")}>typeD</button></div>
      </div>
    </div>
  );
}

export default LeftBar;
