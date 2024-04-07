"use server"
import mysql from 'mysql2/promise';
export async function POST(request){
    const {username, password, email} = await request.json();
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'userdata'
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
        return Response.json({ message: `ข้อมูลที่ซ้ำกัน: ${duplicateFields.join(', ')}` });
      }else {
        // แทรกข้อมูลใหม่ลงในฐานข้อมูล
        const [rows] = await connection.execute('INSERT INTO users (Username, Password, Emails) VALUES (?, ?, ?)', [username, password, email]);
        return Response.json({ message: 'ข้อมูลถูกเพิ่มลงในระบบแล้ว',data: username,password,email });
    }
}