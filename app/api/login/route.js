"use server"
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

export async function GET(req) {
    const username = req.nextUrl.searchParams.get("username");
    const password = req.nextUrl.searchParams.get("password");

    try {
        // สร้างการเชื่อมต่อกับ MySQL
        const connection = await mysql.createConnection({
            host: 'topup.c5ws460g812u.ap-southeast-1.rds.amazonaws.com',
            user: 'admin',
            password: '12345678',
            database: 'topup'
        });

        // ส่งคำสั่ง SQL ไปยังฐานข้อมูลและรับข้อมูลที่ดึงมา
        const [rows] = await connection.execute('SELECT * FROM users WHERE Username = ?', [username]);

        // ปิดการเชื่อมต่อกับ MySQL
        await connection.end();

        if (rows.length > 0) {
            // เช็ครหัสผ่านที่เข้ารหัส
            const user = rows[0];
            const passwordMatch = await bcrypt.compare(password, user.Password);
            if (passwordMatch) {
                return Response.json({ userData: user });
            } else {
                return Response.json({ message: "Login failed" });
            }
        } else {
            return Response.json({ message: "Login failed" });
        }
    } catch (error) {
        console.error('Error:', error);
        return Response.error('An error occurred while processing your request.', 500); // Assuming Response.error() sends error response
    }
}
