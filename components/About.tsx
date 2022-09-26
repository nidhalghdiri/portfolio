import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import nidhalImg from "../public/nidhal-img.jpg";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
type Props = {
  pageInfos: PageInfo[];
};

function About({ pageInfos }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly max-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
      text-gray-500 text-2xl"
      >
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        // transition={{
        //   duration: 0.5,
        // }}
        // viewport={{ once: true }}
        className="-mb-36 md:mb-0  flex-shrink-0 w-36 h-36 md:w-56 md:h-56 xl:w-[300px] xl:h-[350px] relative"
      >
        <motion.img
          className="rounded-full object-cover md:rounded-lg"
          src={urlFor(pageInfos[0]?.heroImage).url()}
          alt="Nidhal Ghdiri"
          // layout="fill" // required
          // objectFit="cover" // change to suit your needs
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl md:text-3xl xl:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#4f9447]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base  xl:text-base text-justify">
          {pageInfos[0]?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
