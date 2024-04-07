"use server"
import mysql from 'mysql2/promise';
import { NextRequest } from 'next/server';

export async function  GET(req) {
const username = req.nextUrl.searchParams.get("username");
const password = req.nextUrl.searchParams.get("password");
console.log("username :", username);
console.log("password :", password);
  try {
    console.log("connect Before");
    // สร้างการเชื่อมต่อกับ MySQL
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'userdata'
      
    });
    // ส่งคำสั่ง SQL ไปยังฐานข้อมูลและรับข้อมูลที่ดึงมา
    const [rows] = await connection.execute('SELECT * FROM users WHERE Username=? AND Password=?',[username, password]);
    // ปิดการเชื่อมต่อกับ MySQL
    await connection.end();
if (rows.length > 0){
  return Response.json({massage:"Login sucsess",userData: rows});
}
else{
  return Response.json({massage:"Login Fail"});
}
  } catch (error) {
    console.error('Error:', error);
    return Response.error('An error occurred while processing your request.', 500); // Assuming Response.error() sends error response
  }
}
