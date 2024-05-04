import React, { useState, useEffect } from "react";
import Itembox from "../itembox/itembox";
import styles from "./Styles.module.css";

function Itembar({ itemsData, handleItemToCart, Category }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filteredItems = itemsData.filter(
      (item) =>
        item.category === Category &&
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filteredItems);
  }, [itemsData, searchTerm, Category]);

  return (
    <div className="border-none rounded-md bg-white">
      <div
        className={`${styles.borderitem} shadow-md`}
        style={{ display: "flex" }}
      >
        <div style={{ width: "100%", textWrap: "nowrap", marginRight: "20px" }}>
          item {Category}
        </div>
        <input
          style={{
            right: "auto",
            borderRadius: "4px",
            fontSize: "14px",
            color: "black",
            maxWidth: "200px",
          }}
          placeholder=" search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={`${styles.Itembar}`}>
        {/* Map over filtered items and render item boxes */}
        {filteredItems.map((item, index) => (
          <div key={index} className={`${styles.Itembox}`}>
            <Itembox items={[item]} itemToCart={handleItemToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Itembar;
