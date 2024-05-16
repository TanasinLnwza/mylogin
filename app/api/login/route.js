"use server";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const { username, password } = await request.json();
  console.log("Username:",username)
  const jwt = require('jsonwebtoken');
  const secret = "baan";



  try {
    // สร้างการเชื่อมต่อกับ MySQL
    const connection = await mysql.createConnection({
      host: "topup.c5ws460g812u.ap-southeast-1.rds.amazonaws.com",
      user: "admin",
      password: "12345678",
      database: "topup",
    });

    // ส่งคำสั่ง SQL ไปยังฐานข้อมูลและรับข้อมูลที่ดึงมา
    console.log("step1:")
    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE Username = ?",
      [username]
    );
    console.log("step2:")
    console.log(rows);
    // ปิดการเชื่อมต่อกับ MySQL
    await connection.end();

    if (rows.length > 0) {
      // เช็ครหัสผ่านที่เข้ารหัส
      const user = rows[0];
      const passwordMatch = await bcrypt.compare(password, user.Password);
        // สร้าง Token
        const token = await jwt.sign({ username: user.Username, userpoint: user.point }, secret);
      if (passwordMatch) {
        return Response.json({ message: "Login successful", token });
      } else {
        return Response.json({ message: "Login failed" });
      }
    } else {
      return Response.json({ message: "Login failed" });
    }
  } catch (error) {
    console.error("Error:", error);
    return Response
      .status(500)
      .json({ message: "An error occurred while processing your request." });
  }
}
