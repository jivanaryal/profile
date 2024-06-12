import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import myPhoto from "../../assets/images/jivan.jpg";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      className="min-h-screen  text-white md:pt-20 pt-10   mx-auto"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={sectionRef}
      id="about"
    >
      <motion.h1
        className="text-center lg:text-7xl text-4xl font-bold mb-10"
        variants={itemVariants}
      >
        About Me
      </motion.h1>
      <div className=" md:grid md:grid-cols-12 gap-10 md:px-8 px-4 py-6 md:mt-14 border-2 bg-[#0d192e] border-[#101e30] rounded shadow-lg shadow-gray-700">
        <motion.div
          className="border-mainColor border-4 w-full mx-auto  md:col-span-5 col-span-full md:max-h-[500px] overflow-hidden max-h-[300px] mb-6"
          variants={itemVariants}
        >
          <img
            src={myPhoto}
            alt="Jivan Aryal"
            className="rounded-lg h-full w-full transform transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
        <motion.div
          className="flex flex-col gap-4 md:col-span-6 col-span-full md:text-[1.5rem] text-[1rem]"
          variants={itemVariants}
        >
          <p className="justify-start lg:text-xl text-[1.1rem] mb-0">
            Hello, I'm <span className="font-semibold">Jivan Aryal</span>. I'm a
            dedicated Software Engineer with expertise in the MERN stack. I
            create dynamic web applications using MongoDB, Express.js, React,
            and Node.js.
          </p>
          <p className="md:text-xl text-[1.1rem] mb-4">
            I also have basic skills in figma, Canva and Photoshop for graphic
            design. I'm passionate about exploring new technologies and
            contributing to open-source projects.
          </p>
          <p className="lg:text-xl text-[1.1rem]">
            I'm open to exciting opportunities and collaborations. Connect with
            me on{" "}
            <a
              href="https://www.linkedin.com/in/jivan-aryal/"
              className="text-blue-500"
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
