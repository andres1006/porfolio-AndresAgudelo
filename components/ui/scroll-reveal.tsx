"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";
type Variants = "fade" | "slide" | "scale" | "rotate" | "flip";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  direction?: Direction;
  delay?: number;
  duration?: number;
  threshold?: number;
  distance?: number;
  once?: boolean;
  cascade?: boolean;
  cascadeDelay?: number;
}

export function ScrollReveal({
  children,
  className,
  variant = "fade",
  direction = "up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  distance = 50,
  once = true,
  cascade = false,
  cascadeDelay = 0.1,
  ...props
}: ScrollRevealProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold 
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  const getDirectionalVariants = () => {
    switch (variant) {
      case "fade":
        return {
          hidden: { 
            opacity: 0,
            y: direction === "up" ? distance : direction === "down" ? -distance : 0,
            x: direction === "left" ? distance : direction === "right" ? -distance : 0,
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
      case "slide":
        return {
          hidden: {
            opacity: 0,
            x: direction === "left" ? distance : direction === "right" ? -distance : 0,
            y: direction === "up" ? distance : direction === "down" ? -distance : 0,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
      case "rotate":
        return {
          hidden: { 
            opacity: 0, 
            rotate: direction === "left" ? -5 : 5,
            scale: 0.95,
          },
          visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
      case "flip":
        return {
          hidden: { 
            opacity: 0, 
            rotateX: direction === "up" || direction === "down" ? 90 : 0,
            rotateY: direction === "left" || direction === "right" ? 90 : 0,
          },
          visible: {
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
    }
  };

  const variants = getDirectionalVariants();

  if (cascade && React.Children.count(children) > 1) {
    return (
      <div ref={ref} className={className} {...props}>
        {React.Children.map(children, (child, index) => (
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delay: delay + index * cascadeDelay,
                },
              },
            }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={controls}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}