// frontend/src/components/ui/timeline.jsx
'use client';

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/utils"; // Assuming you have this utility

export const Timeline = ({
  steps, // Changed from 'data' to 'steps'
  className
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={cn("w-full font-inter md:px-10 hover:cursor-default", className)} // Ensure consistent dark background and font
      ref={containerRef}>
      {/* The "How It Works" heading should be in the parent HowItWorksSection.jsx */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {steps.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                // Circle indicator for the step number
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white text-lg font-bold shadow-lg"> {/* Blue accent for circle */}
                {index + 1} {/* Display step number */}
              </div>
              {/* Title for larger screens */}
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-blue-300"> {/* Blue accent for title */}
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Title for smaller screens */}
              <h3
                className=" block text-4xl mb-4 text-left font-bold text-[#EAE4D5]" style={{ fontFamily: 'var(--font-bebas-neue)'}}> {}
                {item.title}
              </h3>
              {/* Description content */}
              <p className="text-[#EAE4D5] text-xl leading-relaxed" style={{ fontFamily: 'var(--font-geist-mono)'}}> {/* Adjusted text color for readability on dark background */}
                {item.description}
              </p>
            </div>
          </div>
        ))}
        {/* Vertical timeline line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-blue-400 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"> {/* Blue accent for the line */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>
  );
};
