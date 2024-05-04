import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const { username, password } = credentials;
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
              // Return true if the username and password are valid
              return Promise.resolve({ id: user.id, name: user.Username });
            } else {
              // Return false if the password is incorrect
              return Promise.resolve(null);
            }
          } else {
            // Return false if no user found with the provided username
            return Promise.resolve(null);
          }
        } catch (error) {
          console.error('Error:', error);
          return Promise.reject(new Error('An error occurred while processing your request.'));
        }
      }
    })
  ],
  // Specify other NextAuth.js options as needed
});
