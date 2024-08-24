"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { div } from "three/webgpu";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export function experience() {
  const globeConfig = {
    pointSize: 0.0001,
    globeColor: "#171717",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#171717",
    emissiveIntensity: 0.1,
    shininess: 10,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "white",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 10,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.7,
  };
  const colors = ["#404040", "#525252", "#737373"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    
  ];

  return (
    <div>
      <div className="flex items-center justify-center font-roboto my-40 text-neutral-400">
        <div>
          <div className="flex items-center justify-between">
          <h1 className="text-3xl py-4">
          IIT Delhi | ML Research Intern
        </h1>
        <h1 className="text-xl py-4 italic">
          June 2024 - Present
        </h1>
          </div>
        <ul>
        <li> • Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget diam in justo maximus vehicula. Mauris egestas condimentum ipsum vitae hendrerit.</li>
        <li> • Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget diam in justo maximus vehicula. Mauris egestas condimentum ipsum vitae hendrerit.</li>
        <li> • Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget diam in justo maximus vehicula. Mauris egestas condimentum ipsum vitae hendrerit.</li>
        <li> • Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget diam in justo maximus vehicula. Mauris egestas condimentum ipsum vitae hendrerit.</li>
        </ul>
        </div>
      </div>
      <div className="flex items-center justify-center absolute -left-5 top-64 md:top-40 w-full h-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          <div className="absolute w-full h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
      </div>
    </div> 
    
    <ShootingStars />
      <StarsBackground />
      <footer className="w-full pt-20 -pb-20 md:pb-10" id="contact">
      <div className="flex mt-56 md:flex-row flex-col justify-center items-center text-neutral-400">
        <div className="md:text-base text-sm md:font-normal font-light">
          <p>Inspired by dank memes and dreams</p><br />
        <p> © 2024 Vaibhav Pratap Singh</p>
        </div>
      </div>
    </footer>
    </div>  
  );
}

export default experience