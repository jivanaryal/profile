import React from "react";
import { motion } from "framer-motion";
import Rhombus from "../design/Rhombus";

const ProfileIntro = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="md:grid md:grid-cols-12 min-h-screen md:pt-20 pt-10 md:text-[1.5rem] text-[1rem] md:gap-4 gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="col-span-7  flex flex-col gap-3">
        <p className="text-[#a19292ee]">Hello! I am</p>
        <h1>Jivan Aryal</h1>
        <h1 className="text-mainColor">MERN Stack Developer</h1>
        <p>
          I am a passionate web developer who enjoys building interactive and
          user-friendly websites. This portfolio showcases some of the projects
          I have worked on, demonstrating my skills and creativity. Feel free to
          explore and get in touch with me if you have any inquiries or
          collaboration opportunities.
        </p>
      </motion.div>
      <motion.div className="md:col-span-5  mx-auto md:mt-0 md:my-20 my-10">
        <Rhombus />
      </motion.div>
    </motion.div>
  );
};

export default ProfileIntro;
