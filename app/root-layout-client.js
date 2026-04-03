'use client';

import { useEffect, useState } from "react";
import Preloader from "../components/elements/Preloader";

export default function RootLayoutClient({ children }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);

  if (!mounted) {
    return children;
  }

  return (
    <>
      {children}
    </>
  );
}
