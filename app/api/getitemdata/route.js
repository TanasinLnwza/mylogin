"use server"
import mysql from 'mysql2/promise';
import { NextRequest } from 'next/server';

export async function  GET() {
  try {
    // สร้างการเชื่อมต่อกับ MySQL
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'userdata'
      
    });
    // ส่งคำสั่ง SQL ไปยังฐานข้อมูลและรับข้อมูลที่ดึงมา
    const [rows] = await connection.execute('SELECT * FROM itemdata WHERE 100');
    // ปิดการเชื่อมต่อกับ MySQL
    await connection.end();
if (rows.length > 0){
  return Response.json({massage:"Get data sucsess",itemsData: rows});
}
else{
  return Response.json({massage:"Login Fail"});
}
  } catch (error) {
    console.error('Error:', error);
    return Response.error('An error occurred while processing your request.', 500); // Assuming Response.error() sends error response
  }
}
