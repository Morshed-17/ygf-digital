"use client"
import React, { ReactNode } from 'react';

const MessyGradientBanner = ({ children }: {children: ReactNode}) => {
  return (
    <div className="relative overflow-hidden w-full ">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-pink-200  opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-teal-200  opacity-30 animate-pulse"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute right-36 bottom-36 w-1/2 h-1/2 bg-gradient-to-tl from-blue-300 to-indigo-500 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-tr from-pink-300 to-purple-500 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default MessyGradientBanner;