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

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <motion.div
      className="md:grid  md:grid-cols-12 lg:mt-32 md:mt-28  my-20 max-h-screen md:pt-20 pt-10 md:text-[1.5rem] text-[1rem] md:gap-4 gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="profile"
    >
      <motion.div className="col-span-7 flex flex-col gap-3">
        <p className="text-[#a19292ee] text-lg">Hello! I am</p>
        <h1 className="text-3xl md:text-4xl">Jivan Aryal</h1>
        <h2 className="text-2xl md:text-3xl text-mainColor">
          MERN Stack Developer
        </h2>
        <p className="md:leading-8 leading-6 lg:text-[1.5rem] md:text-lg">
          I am a passionate web developer who enjoys building interactive and
          user-friendly websites. This portfolio showcases some of the projects
          I have worked on, demonstrating my skills and creativity. Feel free to
          explore and get in touch with me if you have any inquiries or
          collaboration opportunities.
        </p>
        <h1>jivan aryal</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white md:text-xl text-base mt-3 py-2 px-4  w-fit rounded"
          onClick={openResume}
        >
          Get My Resume
        </button>
      </motion.div>
      <motion.div className="md:col-span-5 mx-auto md:mt-0 md:my-20 my-10">
        <Rhombus />
      </motion.div>
    </motion.div>
  );
};

export default ProfileIntro;
