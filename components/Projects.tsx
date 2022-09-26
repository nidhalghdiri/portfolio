import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import projectImg from "../public/project.png";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";
type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col overflow-hidden  relative text-left md:flex-row xl:flex-row max-w-full xl:px-10 min-h-screen justify-evenly  mx-auto items-center z-0"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
      text-gray-500 text-2xl"
      >
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar scrollbar-track-400/20 scrollbar-thumb-[#4f9447]/80">
        {projects?.map((project, index) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt={project.title}
              className="w-100  md:w-72 xl:w-96"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#4f9447]/50">
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies?.map((tech) => (
                  <motion.img
                    key={tech._id}
                    className="h-8 w-8"
                    src={urlFor(tech.image).url()}
                    alt={tech.title}
                  />
                ))}
              </div>
              <p className="text-sm text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#4f9447]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
