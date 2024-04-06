// ไฟล์: pages/api/login.js
import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'userdata'
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const connection = await pool.getConnection();
      const [results] = await connection.execute('SELECT * FROM user WHERE username = ? AND password = ?', [username, password]);
      connection.release();

      if (results.length === 0) {
        res.status(401).json({ error: 'Invalid username or password' });
      } else {
        // สร้าง token หรือตัวอื่นๆ ที่ใช้สำหรับการระบุตัวตน
        res.status(200).json({ message: 'Login successful' });
      }
    } catch (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
