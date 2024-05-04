import React from "react";
import styles from "./Styles.module.css";
function buttomweb() {
  return (
    <div className={`${(styles.buttombar)}`}>
      <div style={{ height: '150px', display: 'flex', justifyContent: 'center', justifyItems: 'center', alignItems:'center', fontSize:'80px'}}><i class="fa-brands fa-github"></i><i style={{marginLeft:'20px'}} class="fa-brands fa-facebook"></i></div>
      <div  className={` ${(styles.copyright)} p-2 border-solid rounded-md shadow-md`} >Copyright ©2024 By Tanasin-3- | Term of service Privacy policy</div>
    </div>
  );
}

export default buttomweb;
