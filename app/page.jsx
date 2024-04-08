'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const userData = localStorage.getItem('userData');

  const handleLogout = () => {
    localStorage.removeItem('userData');
    router.refresh(); // โหลดหน้าใหม่หลังจากล็อกเอาท์
  };
  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div>
      {userData && (
        <div className="bg-white/20 flex justify-end items-center pr-4">
          {userData}
          <button className="border-none bg-white/20 rounded-md text-white" onClick={handleLogout} type="button">
            Logout
          </button>
          </div>
      )}
      {!userData && (
              <div className="bg-white/20 flex justify-end items-center pr-4">
              <button className="border-none bg-white/20 rounded-md text-white" onClick={handleLogin} type="button">
                Login
              </button>
              <button className="border-none bg-white/20 rounded-md text-white" type="button">
                Register
              </button>
          </div>
      )}
    </div>
  );
}
