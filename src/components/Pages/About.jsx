import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import myPhoto from "../../assets/images/jivan.jpg";

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      className="text-white "
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={sectionRef}
      id="about"
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-center pt-6 text-4xl md:text-6xl font-extrabold pb-10 ext-transparent animate-gradient"
        variants={itemVariants}
      >
        About Mes
      </motion.h1>

      {/* Content Container */}
      <div className="md:grid    md:grid-cols-12 gap-10 bg-[#0d192e]  rounded-lg shadow-lg shadow-indigo-700 border border-[#101e30] transform transition-transform duration-500 hover:scale-[1.003]">
        {/* Profile Image */}
        <motion.div
          className="md:col-span-4 mb-4 col-span-full w-full h-full overflow-hidden rounded-lg shadow-lg shadow-blue-600"
          variants={itemVariants}
        >
          <img
            src={myPhoto}
            alt="Jivan Aryal"
            className="h-full  w-full object-cover transform transition-transform duration-700 hover:scale-110 hover:rotate-3"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="md:col-span-8 p-3 col-span-full flex flex-col gap-2 lg:text-xl text-lg"
          variants={itemVariants}
        >
          <p className="text-white">
            Hello, I am{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
              Jivan Aryal
            </span>
            . I am a dedicated Software Engineer with expertise in the MERN
            stack. I create dynamic web applications using MongoDB, Express.js,
            React, and Node.js.
          </p>
          <p className="text-gray-300 md:block hidden">
            I also have experience with design tools like Figma, Canva, and
            Photoshop, which helps me bring ideas to life visually. I’m
            passionate about exploring new technologies and contributing to
            open-source projects.
          </p>
          <p className="text-gray-300">
            I'm open to exciting opportunities and collaborations. Connect with
            me on{" "}
            <a
              href="https://www.linkedin.com/in/jivan-aryal/"
              className="text-blue-400 font-medium underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
