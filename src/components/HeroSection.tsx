"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { FlipWords } from "./ui/flip-words";
import { cn } from "@/lib/utils";



export function HeroSection() {

  const words = ["Vaibhav", "an engineer", "a researcher", "a dog lover", "a coffee addict"];

  return (
    <div>
    <div className="h-[45.5rem] relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 z-20">
         Hello, I am
        <FlipWords words={words} /> <br />
         check out my resume
      </div>
      <div className="mt-10">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black dark:text-white flex items-center space-x-2 "
      >
        <a href="https://drive.google.com/file/d/1wWN5X5HYn0FTSgl_UoVB7Skf8xsFDfSc/view?usp=sharing">Resume</a>
      </HoverBorderGradient>
      </div>
    </div>
    </div>
    
  );
}

export default HeroSection 