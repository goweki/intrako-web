"use client";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";

export function Providers({ children }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  }, []);
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
