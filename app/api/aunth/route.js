"use server"
import mysql from 'mysql2/promise';
import { NextRequest } from 'next/server';

export async function  GET(req) {
  try {
    const jwt = require('jsonwebtoken');
    const secret = "baan";
    const authHeader = req.headers.get('authorization');
    console.log(authHeader)
    const token = authHeader.split(' ')[1];
    console.log(token)
    const decoded =jwt.verify(token, secret)
    if(decoded){
      console.log("Decoded:",decoded)
      return Response.json({decoded});
    }
}
 catch (error) {
    console.error('Error:', error);
    return Response.error('An error occurred while processing your request.', 500); // Assuming Response.error() sends error response
  }
}
