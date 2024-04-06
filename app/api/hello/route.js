// pages/api/hello.js

export default function handler(req, res) {
  if (req.method === 'GET') {
    // รับคำขอ GET
    res.status(200).json({ message: 'Hello from Next.js API!' });
  } else {
    // สำหรับวิธีการอื่น ๆ ที่ไม่ใช่ GET
    res.setHeader('Allow', ['GET']); // ให้ส่งคำอนุญาตสำหรับ GET เท่านั้น
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
