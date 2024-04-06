// pages/api/login.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    if (!req.body) {
      res.status(400).json({ error: 'Missing request body' });
      return;
    }

    const { username, password } = req.body;

    // ตรวจสอบว่า username และ password ถูกต้องหรือไม่
    if (username === 'user1' && password === 'password1') {
      // สร้าง token หรือตัวอื่น ๆ ที่ใช้สำหรับการระบุตัวตน
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
