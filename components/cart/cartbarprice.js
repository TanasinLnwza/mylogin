import React from 'react';

function CartBarPrice({ itemCart }) {
  return (
    <div >
      {Array.isArray(itemCart) && itemCart.map((item, index) => (
        <div style={{display:'flex', padding:'1px', left:'0'}} key={index}>
          <div>{item.price}</div>
          {/* แสดงข้อมูลอื่น ๆ ที่ต้องการ */}
        </div>
      ))}
    </div>
  );
}

export default CartBarPrice;
