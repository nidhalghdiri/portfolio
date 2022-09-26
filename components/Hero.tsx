import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import nidhalImg from "../public/nidhal-img.jpg";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";
type Props = {
  pageInfos: PageInfo[];
};

function Hero({ pageInfos }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I am ${pageInfos[0]?.name}`,
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <motion.img
        className="relative rounded-full  h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfos[0]?.heroImage).url()}
        alt="Nidhal Ghdiri"
        height={100}
        width={100}
      />
      <div className="z-20">
        <h2 className="text-sm md:text-1xl lg:text-1xl uppercase text-gray-500 pb-2 tracking-[8px]">
          {pageInfos[0]?.role}
        </h2>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#4f9447" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
