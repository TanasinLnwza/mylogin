import React, { useState } from "react";

const hambergerleftbar = ({onCategoryChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCategory = (number) => { // Corrected function name
    onCategoryChange(number); // Update Category state with the selected number
  };
  return (
    <nav className="mr-2">
      <div className="">
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none focus:text-white"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute shadow-md lg:hidden ">
            <div className="text-sm font-bold  p-2 rounded-md shadow-lg" style={{background:"rgba(51, 51, 51, 1)"}}>Category</div>
          <div className=" bg-white rounded-md p-2 flex flex-col text-sm">
            <button className=" text-black rounded-md p-2 shadow-md" onClick={() => handleCategory("typeA")}>
              Type A
            </button>
            <button className=" text-black rounded-md p-2 shadow-md" onClick={() => handleCategory("typeB")}>
              Type B
            </button>
            <button className=" text-black rounded-md p-2 shadow-md" onClick={() => handleCategory("typeC")}>
              Type C
            </button>
            <button className=" text-black rounded-md p-2 shadow-md" onClick={() => handleCategory("typeD")}>
              Type D
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default hambergerleftbar;
