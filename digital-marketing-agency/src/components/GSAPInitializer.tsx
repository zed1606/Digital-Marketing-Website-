"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GSAPInitializer: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    console.log("GSAP and ScrollTrigger registered");
  }, []);

  return null; // This component doesn&apos;t render anything
};

export default GSAPInitializer;
