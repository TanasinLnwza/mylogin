"use server"
import mysql from 'mysql2/promise';

export async function PATCH(request) {
    const {username, cal, num} = await request.json();
  
  try {
    // Create a connection to MySQL
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1234",
      database: "userdata",
    });
    
    // Fetch the current point for the user
    const [currentPointRows] = await connection.execute(
      "SELECT `point` FROM `users` WHERE `username`=?",
      [username]
    );
    const currentPoint = currentPointRows[0]?.point || 0;

    let updatedPoint = currentPoint;
    
    // Update point based on the operation
    if (cal === "+") {
      updatedPoint += parseInt(num); // Increment the point
    } else if (cal === "-") {
      updatedPoint -= parseInt(num); // Decrement the point
    } else {
      throw new Error("Invalid operation. Supported operations are '+' and '-'");
    }
    
    // Update the point in the database
    await connection.execute(
      "UPDATE `users` SET `point`=? WHERE `username`=?",
      [updatedPoint, username]
    );
    console.log(updatedPoint)

    // Close the database connection
    await connection.end();

    // Send the updated point as response
    return Response.json({ userData: { point: updatedPoint } });
    
  } catch (error) {
    console.error("Error:", error);
    return Response.error(
      "An error occurred while processing your request.",
      500
    ); // Assuming Response.error() sends error response
  }
}
