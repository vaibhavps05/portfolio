"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";

const content = [
  {
    title: "Book Recommendation System",
    description:
      "This project involves developing a book recommendation system that uses the K-Nearest Neighbor (KNN) algorithm and collaborative filtering. By analyzing clickstream data and using Euclidean distance, the system generates fast and personalized book recommendations. The model powers a website where users receive relevant book suggestions based on their search queries, demonstrating the system's ability to improve the book discovery process through precise and personalized recommendations.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/bookrec.png"
          width={900}
          height={900}
          className="h-full w-[100%] object-cover"
          alt="Book Recommendation System"
        />
      </div>
    ),
  },
  {
    title: "Olympic Analyser",
    description:
      "Developed a Streamlit dashboard application in Python to analyze and visualize data from all Olympic Games. The dashboard provides detailed statistics, including country-wise, player-wise, and sports-wise metrics. It features interactive graphs that help users explore trends, medal counts, and performance insights. Additionally, the application includes features that allow users to filter data and delve into specific data points for a more thorough analysis. The interactive web application offers a user-friendly interface, enabling a deeper understanding of Olympic Data.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/olympic.png"
          width={900}
          height={900}
          className="h-full w-full object-cover"
          alt="Olympic Analyser"
        />
      </div>
    ),
  },
  {
    title: "T20 World Cup 2022 Analysis",
    description:
      "Created an interactive Power BI dashboard to thoroughly analyze T20 World Cup 2022 data, focusing on both match and player statistics. The project involved processing and transforming raw sports data into meaningful insights, emphasizing key trends, performance metrics, and comparisons throughout the tournament. The project was showcased in a video presentation, where the process of data analysis and the techniques used for effective visualization were demonstrated.",
      content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/t20.png"
          width={900}
          height={900}
          className="h-full w-full object-cover"
          alt="T20 World Cup 2022 Analysis"
        />
      </div>
    ),
  },
  {
    title: "Fake News Detection",
    description:
      "Developed a model to classify news as REAL or FAKE using TfidfVectorizer, which converts text into numeric form while emphasizing key terms. The model was trained with a Passive Aggressive Classifier on this vectorized data, enabling it to detect patterns distinguishing real news from fake news. The performance of the model was evaluated, achieving an accuracy rate of 92.82%, and was supported by a thorough analysis using a confusion matrix to assess its effectiveness.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/fake.jpg"
          width={900}
          height={900}
          className="h-full w-full object-cover"
          alt="Fake News Detection"
        />
      </div>
    ),
  }
];
export default function projects() {
  return (
    <div className="w-full h-[45rem] my-0">
      <StickyScroll content={content} />
      <footer className="w-full pt-1 pb-10" id="contact">
      <div className="flex mt-10 md:flex-row flex-col justify-center items-center text-neutral-600">
        <div className="md:text-base text-sm md:font-normal font-light">
          <p>Inspired by dank memes and dreams</p><br />
        <p> © 2024 Vaibhav Pratap Singh</p>
        </div>
      </div>
    </footer>
    </div>
  );
}
