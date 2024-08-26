"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { div } from "three/webgpu";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export default function page() {
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
    <div className="items-center justify-center">
      <div className="flex items-center justify-center font-roboto my-32 text-neutral-400 w-[80%] mx-auto">
        <div>
          <div className="flex items-center justify-between py-4">
            <h1 className="text-3xl">IIT Delhi | ML Research Intern</h1>
            <h1 className="text-xl italic">June &apos;24 - Present</h1>
          </div>
          <div className="px-10 font-roboto">
            <ul className="list-outside list-disc space-y-1 font-roboto tracking-wide">
              <li>
                {" "}
                Conducted research on{" "}
                <span className="font-extrabold">
                  mental health among gamers
                </span>
                , optimizing deep neural networks to handle imbalanced datasets,
                under the supervision of{" "}
                <span className="font-extrabold">
                  Professor Tapan Kumar Gandhi
                </span>
                .
              </li>
              <li>
                {" "}
                Analyzed a dataset on the prevalence of self-reported{" "}
                <span className="font-extrabold">insomnia,</span> excessive{" "}
                <span className="font-extrabold">daytime sleepiness,</span>
                <span className="font-extrabold">
                  {" "}
                  anxiety, depression,
                </span>{" "}
                and gaming disorder among gamers, utilizing the Game Addiction
                Scale Short Form for assessment.
              </li>
              <li>
                {" "}
                Created application{" "}
                <span className="font-extrabold">
                  feature-based engagement data cubes{" "}
                </span>
                for multiple features and time series measures,{" "}
                <span className="font-extrabold">enhancing data analysis</span>{" "}
                capabilities.
              </li>
              <li>
                {" "}
                We utilized various classification methods, including Support
                Vector Machine (SVM), Gaussian Naive Bayes (GNB), Random Forest
                (RF), Adaptive Boosting (AdaBoost), Decision Tree (DT), XGBoost,
                and Gradient Boosting (GB). In our study,{" "}
                <span className="font-extrabold">Adaptive Boosting</span>{" "}
                demonstrated superior performance compared to the other methods.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center absolute -left-5 top-[100%] md:top-[15rem] w-full h-full">
        <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
          <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          <div className="absolute w-full h-[20rem] md:h-full md:z-10 -z-10">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </div>
      </div>

      <ShootingStars />
      <StarsBackground />
      <footer
        className="w-full pt-[60%] md:pt-36 -pb-[30rem] md:pb-10"
        id="contact"
      >
        <div className="flex mt-56 md:flex-row flex-col justify-center items-center text-neutral-600">
          <div className="md:text-base text-sm md:font-normal font-light">
            <p>Inspired by dank memes and dreams</p>
            <br />
            <p> © 2024 Vaibhav Pratap Singh</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
