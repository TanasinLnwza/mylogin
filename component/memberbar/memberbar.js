import React, { useState } from "react";
import styles from "./Styles.module.css";

function MemberBar() {
  const handleProfileUpload = () => {
    // ดำเนินการเมื่อผู้ใช้คลิกที่ปุ่ม
    const inputFile = document.getElementById('myfile');
    if (inputFile) {
      inputFile.click(); // ให้คลิกที่ input file
    }}
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const handleproflieupload = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Uploaded file:", file);
  };
  const handleAddAddress = () => {
    if (newAddress.trim() !== "") {
      setAddresses([...addresses, { id: Date.now(), description: newAddress }]);
      setNewAddress("");
    }
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  const handleEditAddress = (id, newDescription) => {
    setAddresses(
      addresses.map((address) =>
        address.id === id
          ? { ...address, description: newDescription }
          : address
      )
    );
  };

  return (
    <div
      style={{ width: "800px", height: "auto", marginBottom: "20px" }}
      className="border-none rounded-md bg-white"
    >
      <div
        style={{ textAlign: "center" }}
        className={`${styles.borderitem} shadow-md `}
      >
        สมาชิก
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          paddingBottom: "100px",
        }}
      >
        <div
          style={{
            boxShadow: "2px 4px 4px 1px rgba(0, 0, 0, 0.4) ",
            maxWidth: "400px",
          }}
        >
          <div
            style={{
              width: "auto",
              height: "40",
              padding: "10px",
              background: "rgba(0, 0, 0, 0.8",
              color: "white",
              textAlign: "center",
              borderRadius: "4px",

              margin: "auto",
            }}
          >
            username
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <input
                type="file"
                id="myfile"
                name="myfile"
                style={{ display: "none" }}
              />
              <button
                style={{ position: "relative" }}
                onMouseEnter={() =>
                  (document.querySelector(
                    `.${styles.profile} i`
                  ).style.opacity = "1")
                }
                onMouseLeave={() =>
                  (document.querySelector(
                    `.${styles.profile} i`
                  ).style.opacity = "0")
                }
                onClick={handleProfileUpload} // เรียกใช้ handleProfileUpload เมื่อคลิกที่ปุ่ม
              >
                <img
                  style={{
                    borderRadius: "100%",
                    width: "140px",
                    height: "140px",
                    padding: "10px",
                  }}
                  src="/images/profile.jpg"
                  alt="Profile"
                ></img>
                <div className={`${styles.profile}`}>
                  <i
                    style={{
                      position: "absolute",
                      bottom: 12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      color: "white",
                      background: "rgba(0, 0, 0, 0.8)",
                      width: "30px",
                      borderRadius: "4px",
                      transition: "opacity 0.3s",
                      opacity: "0",
                    }}
                    className={`fa-solid fa-camera`}
                  ></i>
                </div>
              </button>
            </div>
          </div>
          <div style={{ padding: "10px" }}>
            <div>email :</div>
            <div>birdday :</div>
            <div>เบอร์ :</div>
            <div>ที่อยู่ :</div>
            <div style={{ padding: "10px" }}>
              {addresses.map((address) => (
                <div key={address.id}>
                  <div>{address.description}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <button
                      onClick={() =>
                        handleEditAddress(
                          address.id,
                          prompt("Edit address", address.description)
                        )
                      }
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteAddress(address.id)}
                      style={{ marginRight: "0" }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              <textarea
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                placeholder="เพิ่มที่อยู่"
                style={{
                  boxSizing: "border-box",
                  height: "auto",
                  whiteSpace: "pre-wrap",
                }}
              />
              <button onClick={handleAddAddress}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberBar;
