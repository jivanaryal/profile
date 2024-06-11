import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFigma, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { FaCss3, FaJs, FaNodeJs, FaReact } from "react-icons/fa6";
import { SiCanva, SiExpress, SiMongodb, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";

const FrontendData = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "NextJs", icon: <RiNextjsFill /> },
];

const backendData = [
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MYSQL", icon: <GrMysql /> },
];

const Miscellaneous = [
  { name: "git", icon: <FaGitAlt /> },
  { name: "figma", icon: <FaFigma /> },
  { name: "Canva", icon: <SiCanva /> },
];

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Skills = () => {
  const { ref: frontendRef, inView: frontendInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: backendRef, inView: backendInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: miscRef, inView: miscInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen md:py-52 py-36">
      <div>
        <h1 className="md:text-7xl text-4xl font-bold text-center">Skills</h1>
        <div className="flex flex-col flex-nowrap gap-10 pt-10">
          <div className="flex flex-col gap-3" ref={frontendRef}>
            <h1 className="md:text-4xl text-2xl">FrontEnd</h1>
            <div className="flex flex-wrap gap-4">
              {FrontendData.map((val, i) => (
                <motion.div
                  key={i}
                  className="skill-button border p-2"
                  initial="hidden"
                  animate={frontendInView ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <div className="flex items-center">
                    <span className="mr-2">{val.icon}</span>
                    <span>{val.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col flex-nowrap gap-4" ref={backendRef}>
            <h1 className="md:text-4xl text-2xl">Backend and Database</h1>
            <div className="flex flex-wrap gap-4">
              {backendData.map((val, i) => (
                <motion.div
                  key={i}
                  className="skill-button border p-2"
                  initial="hidden"
                  animate={backendInView ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <div className="flex items-center">
                    <span className="mr-2">{val.icon}</span>
                    <span>{val.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4" ref={miscRef}>
            <h1 className="md:text-4xl text-2xl">Miscellaneous</h1>
            <div className="flex flex-wrap gap-4">
              {Miscellaneous.map((val, i) => (
                <motion.div
                  key={i}
                  className="skill-button border p-2"
                  initial="hidden"
                  animate={miscInView ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <div className="flex items-center">
                    <span className="mr-2">{val.icon}</span>
                    <span>{val.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
