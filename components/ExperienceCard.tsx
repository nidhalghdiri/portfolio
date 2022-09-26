import Image from "next/image";
import React from "react";
import reactjsLogo from "../public/reactjs.png";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-8 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="https://thumbs.dreamstime.com/b/logo-d-amazone-sur-un-fond-blanc-98221126.jpg"
        alt="amazon logo"
        className="w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-1xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((tech) => (
            <div key={tech._id} className="relative h-8 w-8">
              <motion.img
                className="object-cover"
                src={urlFor(tech.image).url()}
                alt={tech.title}
                // layout="fill"
                // objectFit="cover"
              />
            </div>
          ))}
        </div>
        <p className="uppercase py-3 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-md h-38 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#4f9447]/80">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
