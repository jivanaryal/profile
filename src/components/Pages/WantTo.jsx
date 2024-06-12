import React from "react";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactDetails = [
  {
    title: "Offer job Opportunity?",
    description:
      "I am open to discussing potential job opportunities or collaborations. With experience in web development and software engineering, I am interested in roles that allow me to work on exciting and challenging projects. If you have a project or role in mind, feel free to reach out and let's discuss!",
  },
  {
    title: "Connect?",
    description:
      "Networking is key in the tech industry, and I'm always looking to meet new people and expand my professional circle. Whether you're a fellow developer, designer, or entrepreneur, I'd love to chat and learn more about your work. Let's grab a virtual coffee and see where the conversation takes us!",
  },
  {
    title: "Build Something?",
    description:
      "I have a passion for developing innovative web applications that solve complex problems. Whether it's building a custom e-commerce platform or a cutting-edge web app, I'm always ready for a new challenge. Let's create something amazing together!",
  },
];

const logos = [
  {
    logo: <FaFacebook />,
    path: "https://www.facebook.com/aryal.jeevan.90/",
  },
  {
    logo: <AiOutlineTwitter />,
    path: "https://twitter.com/jivan_aryal16",
  },
  {
    logo: <FaGithub />,
    path: "https://github.com/jivanaryal",
  },
  {
    logo: <AiFillLinkedin />,
    path: "https://www.linkedin.com/in/jivan-aryal/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const WantTo = () => {
  const { ref: containerRef, inView: containerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: iconsRef, inView: iconsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      <div>
        <h1 className="lg:text-7xl text-4xl font-bold text-center">Wants To</h1>

        <motion.div
          className="grid lg:grid-cols-3 items-center md:grid-cols-2 grid-cols-1 md:gap-10 gap-8 md:pt-20 pt-10"
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={containerInView ? "visible" : "hidden"}
        >
          {ContactDetails.map((val, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-6"
              variants={itemVariants}
            >
              <div className="text-center lg:text-4xl text-2xl text-mainColor">
                {val.title}
              </div>
              <div className="md:text-[1.2rem] text-[1rem]">
                {val.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex justify-center mr-10 pt-10 md:gap-4 gap-2 mt-8 md:mt-10 ml-4 md:ml-32"
          ref={iconsRef}
          variants={containerVariants}
          initial="hidden"
          animate={iconsInView ? "visible" : "hidden"}
        >
          {logos.map((val, i) => (
            <Link to={val.path} key={i}>
              <motion.div
                className="border-2 rounded-full text-white hover:text-mainColor hover:shadow-md hover:shadow-mainColor transition-all delay-100 duration-200 p-3 shadow-2xl border-transparent md:text-4xl text-2xl"
                variants={iconVariants}
              >
                {val.logo}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WantTo;
