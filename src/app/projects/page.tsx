"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper purus neque, a scelerisque tellus sollicitudin non. Sed luctus pharetra dignissim. Ut in enim et felis convallis feugiat. Nulla condimentum ut augue a egestas. Vivamus sagittis tincidunt tortor, ut ultricies urna feugiat at. Quisque convallis malesuada turpis eu vestibulum. Donec vitae odio maximus, pulvinar nunc nec, tincidunt urna. Morbi et tincidunt lectus, vel maximus erat. Fusce id pulvinar libero. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper purus neque, a scelerisque tellus sollicitudin non. Sed luctus pharetra dignissim. Ut in enim et felis convallis feugiat. Nulla condimentum ut augue a egestas. Vivamus sagittis tincidunt tortor, ut ultricies urna feugiat at. Quisque convallis malesuada turpis eu vestibulum. Donec vitae odio maximus, pulvinar nunc nec, tincidunt urna. Morbi et tincidunt lectus, vel maximus erat. Fusce id pulvinar libero. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper purus neque, a scelerisque tellus sollicitudin non. Sed luctus pharetra dignissim. Ut in enim et felis convallis feugiat. Nulla condimentum ut augue a egestas. Vivamus sagittis tincidunt tortor, ut ultricies urna feugiat at. Quisque convallis malesuada turpis eu vestibulum. Donec vitae odio maximus, pulvinar nunc nec, tincidunt urna. Morbi et tincidunt lectus, vel maximus erat. Fusce id pulvinar libero. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function projects() {
  return (
    <div className="w-full h-[45rem] my-0">
      <StickyScroll content={content} />
    </div>
  );
}

export default projects