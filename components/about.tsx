"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in commerce, I worked as a store
        accountant for 2 years after decided to my passion for programming. I
        got an internship offer from Keprevos Pvt. Ltd. and worked there as
        well. My favourite part of front-developer I am always looking to learn
        new technologies. I am currently looking for a full-time position as a
        software developer.
      </p>
    </motion.section>
  );
}
