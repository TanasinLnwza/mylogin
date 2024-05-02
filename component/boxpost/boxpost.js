import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import styles from "./Styles.module.css";

// Import CSS ของ Swiper ไปยังหน้าเว็บ
import "swiper/css";
import "swiper/css/navigation";

// Initialize SwiperCore สำหรับ Navigation
SwiperCore.use([Navigation]);

function Boxpost() {
  // สร้าง array ของรูปภาพตัวอย่าง
  const images = [
    "/images/Promote/p4.jpg",
    "/images/Promote/p4.jpg",
    "/images/Promote/p4.jpg",
    // เพิ่มรูปภาพตัวอย่างเพิ่มเติมตามต้องการ
  ];

  // สร้างอาร์เรย์ของสีพื้นหลังที่ต้องการใช้
  const backgroundColors = ["#3366FF","#CC3333", "green"]; // เพิ่มสีอื่นๆตามต้องการ

  return (
    <div style={{ zIndex: 1 }}>
      <Swiper navigation={true} className={styles.gallery}>
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className={`${styles.swiperslide}`}
            style={{ backgroundColor: backgroundColors[index] }} // กำหนดสีพื้นหลัง
          >
            <img className={`${styles.img}`} src={image} alt={`Image ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Boxpost;