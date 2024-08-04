"use client";
import React, { useEffect } from "react";
import { grid } from "ldrs";

// Default values shown

const loading = () => {
  useEffect(() => {
    async function getLoader() {
      const { grid } = await import("ldrs");
      grid.register();
    }
    getLoader();
  }, []);
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <l-grid color="#2563EB"></l-grid>
    </div>
  );
};

export default loading;
