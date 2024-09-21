"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { HeroHighlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

function HeroSection({
  title,
  description,
  buttonText,
  buttonLink,
}: HeroSectionProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full text-center px-4 sm:px-6 lg:px-8 -mt-60 sm:-mt-28 md:-mt-32">
      <HeroHighlight>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl mx-auto bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-2 sm:pb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-sm sm:text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed"
        >
          {description}
        </motion.p>
        {buttonText && buttonLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            className="mt-10"
          >
            <Link href={buttonLink}>
              <Button>{buttonText}</Button>
            </Link>
          </motion.div>
        )}
      </HeroHighlight>
    </div>
  );
}

export default HeroSection;