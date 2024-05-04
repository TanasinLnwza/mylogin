import React from 'react';

function CartBar({ itemCart }) {
  return (
    <div >
      {itemCart.map((item, index) => (
        <div style={{display:'flex', padding:'1px', left:'0'}} key={index}>
          <div>{item.name}</div>
          <div>{item.quantity}</div>
          <div>{item.price}</div>
          {/* แสดงข้อมูลอื่น ๆ ที่ต้องการ */}
        </div>
      ))}
    </div>
  );
}

export default CartBar;
