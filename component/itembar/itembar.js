import React from "react";
import Itembox from "../itembox/itembox";
import styles from "./Styles.module.css";

function Itembar({ itemsData, handleItemToCart, Category }) {
  // Filter items based on the selected category
  const filteredItems = itemsData.filter(item => item.category === Category);

  return (
    <div className="border-none rounded-md bg-white">
      <div className={`${styles.borderitem} shadow-md`}> item {Category} </div>
      <div className={`${styles.Itembar}`}>
        {/* Map over filtered items and render item boxes */}
        {filteredItems.map((item, index) => (
          <div key={index} className={`${styles.Itembox}`}>
            <Itembox items={[item]} itemToCart={handleItemToCart} />
          </div>
        ))}
        {/* Additional Itembox for Category 1 */}
        {Category === 1 && (
          <div className={`${styles.Itembox}`} style={{display:"flex", flexWrap:"wrap",gap:"100px"}}>
            <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
            <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
            <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
            <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
            <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
            <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
            <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
            <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
          </div>
        )}
        {/* Additional Itembox for Category 2 */}
        {Category === 2 && (
          <div className={`${styles.Itembox}`}  style={{display:"flex", flexWrap:"wrap",gap:"100px"}}>
            <Itembox items={[itemsData[1]]} itemToCart={handleItemToCart} />
            <Itembox items={[itemsData[1]]} itemToCart={handleItemToCart} />
            <Itembox items={[itemsData[1]]} itemToCart={handleItemToCart} />
            <Itembox items={[itemsData[1]]} itemToCart={handleItemToCart} />
            <Itembox items={[itemsData[1]]} itemToCart={handleItemToCart} />
            <Itembox items={[itemsData[1]]} itemToCart={handleItemToCart} />
            <Itembox items={[itemsData[1]]} itemToCart={handleItemToCart} />
          </div>
        )}
           {Category === 3 && (
          <div className={`${styles.Itembox}`}  style={{display:"flex", flexWrap:"wrap",gap:"100px"}}>
            <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
            <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
            <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
          </div>
        )}
           {Category === 4 && (
          <div className={`${styles.Itembox}`}  style={{display:"flex", flexWrap:"wrap",gap:"100px"}}>
            <Itembox items={[itemsData[0]]} itemToCart={handleItemToCart} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Itembar;
