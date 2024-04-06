import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'userdata'
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    if (!req.body) {
      res.status(400).json({ error: 'Missing request body' });
      return;
    }

    const { username, password } = req.body;

    try {
      const connection = await pool.getConnection();
      const [results] = await connection.execute('SELECT * FROM users WHERE Username = ? AND Password = ?', [username, password]);
      connection.release();

      if (results.length === 0) {
        res.status(401).json({ error: 'Invalid username or password' });
      } else {
        // สร้าง token หรือตัวอื่น ๆ ที่ใช้สำหรับการระบุตัวตน
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
