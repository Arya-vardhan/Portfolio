"use client";
import React, { useState, useEffect } from "react";

const phrases = [
  "Hardware Developer",
  "Cybersecurity Learner",
  "IoT & Embedded Systems Engineer",
  "Python Developer",
];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timeout = setTimeout(() => {
          setText(phrases[index].substring(0, subIndex - 1));
          setSubIndex(subIndex - 1);
        }, 100);
      }
    } else {
      if (subIndex === phrases[index].length) {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      } else {
        timeout = setTimeout(() => {
          setText(phrases[index].substring(0, subIndex + 1));
          setSubIndex(subIndex + 1);
        }, 150);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  return (
    <h2 className="font-headline text-2xl md:text-3xl font-semibold text-accent accent-glow">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
};

export default AnimatedText;
