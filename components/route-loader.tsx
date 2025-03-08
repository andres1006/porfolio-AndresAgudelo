"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export function RouteLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  // Reset loading state when route changes
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate loading time

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1">
      {isLoading && (
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}