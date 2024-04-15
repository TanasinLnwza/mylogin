import React from 'react';

function CartBar({ itemCart }) {
  return (
    <div>
      {itemCart.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.quantity}</p>
          <p>{item.price}</p>
          {/* แสดงข้อมูลอื่น ๆ ที่ต้องการ */}
        </div>
      ))}
    </div>
  );
}

export default CartBar;
