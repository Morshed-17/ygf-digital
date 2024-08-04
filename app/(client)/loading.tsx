"use client"
import React, { useEffect } from "react";
import { grid } from "ldrs";

grid.register("l-grid");

// Default values shown

const loading = () => {
    useEffect(() => {
        async function getLoader() {
          const { spiral } = await import('ldrs')
          spiral.register()
        }
        getLoader()
      }, [])
      return <div className="h-[calc(100vh-64px)] flex items-center justify-center">
        <l-grid color="#2563EB"></l-grid>
      </div>
};

export default loading;
