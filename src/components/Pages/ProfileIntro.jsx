import { motion } from "framer-motion";
import Rhombus from "../design/Rhombus";

const ProfileIntro = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  // Border animation (loading effect)
  const borderAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  };

  // Open Resume function
  const openResume = () => {
    // window.open("/resume.pdf", "_blank");
  };

  return (
    <motion.div
      className="md:grid md:grid-cols-12 lg:mt-32 md:mt-28 my-20 max-h-screen md:pt-20 pt-10 md:text-[1.5rem] text-[1rem] md:gap-4 gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="profile"
    >
      {/* Text Section */}
      <motion.div className="col-span-7 flex flex-col gap-4">
        <motion.p className="text-[#a19292ee] text-lg" variants={textVariants}>
          Hello! I am
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text"
          variants={textVariants}
        >
          Jivan Aryal
        </motion.h1>
        <motion.h2
          className="text-3xl md:text-4xl text-mainColor font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent bg-clip-text"
          variants={textVariants}
        >
          MERN Stack Developer
        </motion.h2>
        <motion.p
          className="md:leading-8 leading-6 lg:text-[1.5rem] md:text-lg text-gray-200 mt-3"
          variants={textVariants}
        >
          I am a passionate web developer who enjoys building interactive and
          user-friendly websites. This portfolio showcases some of the projects
          I have worked on, demonstrating my skills and creativity. Feel free to
          explore and get in touch with me if you have any inquiries or
          collaboration opportunities.
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white md:text-xl text-base mt-5 py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 w-fit"
          onClick={openResume}
          variants={textVariants}
        >
          Get My Resume
        </motion.button>
      </motion.div>

      {/* Image Container with Animated Circular Border */}
      <motion.div
        className="md:col-span-5 flex items-center justify-center mx-auto md:mt-0 md:my-32 my-10 rounded-full p-4 shadow-2xl bg-gradient-radial from-purple-700 via-sky-600 to-indigo-600"
        variants={imageVariants}
      >
        <motion.div
          className="relative w-64 h-64 lg:w-96 lg:h-96 md:w-80 md:h-80 rounded-full overflow-hidden bg-[#0d192e] p-4 shadow-lg transition-all duration-300 hover:shadow-xl"
          initial="hidden"
          animate="visible"
        >
          {/* Border Animation */}
          <div className="absolute inset-0 rounded-full border-8 border-[#00BFFF] border-opacity-80 animate-pulse" />

          {/* Inner Image */}
          <Rhombus className="w-full h-full transform scale-110 opacity-90 transition-transform duration-500 hover:scale-100" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileIntro;
