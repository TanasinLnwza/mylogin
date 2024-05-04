"use server"
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
export async function POST(request){
    const {username, password, email} = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const connection = await mysql.createConnection({
      host: 'topup.c5ws460g812u.ap-southeast-1.rds.amazonaws.com',
      user: 'admin',
      password: '12345678',
      database: 'topup'
      }); 
      const [existingUsers] = await connection.execute('SELECT * FROM users WHERE Username = ? OR Emails = ?', [username, email]);
      if(existingUsers.length > 0){
        const duplicateFields = [];
        if (existingUsers.find(user => user.Username === username)) {
            duplicateFields.push('ชื่อผู้ใช้');
        }
        if (existingUsers.find(user => user.Emails === email)) {
            duplicateFields.push('อีเมล');
        }
        return Response.json({ message:`${duplicateFields.join(', ')}RegisterFailed` });
      }else {
        // แทรกข้อมูลใหม่ลงในฐานข้อมูล
        const [rows] = await connection.execute('INSERT INTO users (Username, Password, Emails) VALUES (?, ?, ?)', [username, hashedPassword, email]);
        return Response.json({ message: 'ข้อมูลถูกเพิ่มลงในระบบแล้ว',userData: username,password,email });
    }
}