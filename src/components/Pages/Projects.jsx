import { RiLiveLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import amazon from "../../assets/images/amazon.png";
import colorib from "../../assets/images/colorib.png";
import hubit from "../../assets/images/hubit.png";
import portfolio from "../../assets/images/oldport.png";
import employeeManagement from "../../assets/images/cms.jpeg";
import employeeDashboard from "../../assets/images/ems.jpeg";
import ecommerce from "../../assets/images/ecommerce.png";
import clothingStore from "../../assets/images/clothStore.png";
import colleges from "../../assets/images/colleges.png";
import ekinum from "../../assets/images/ekinum.png";
import { useState } from "react";

const Projects = () => {
  const [showMore, setShowMore] = useState({});
  
  const ProjectData = [
    {
      image: ekinum,
      header: "Ekinum Website",
      made: "React, Node.js, Express.js, MySQL, Tailwind CSS",
      intro:
        "Ekinum is a website for buying subscription items, game-related diamonds, UC, and gift cards.",
      fullIntro:
        "Ekinum is a modern e-commerce platform built using React for the frontend, Node.js/Express for the backend, and MySQL for database management. Users can browse and purchase a variety of subscription-based items, including game-related diamonds, UC, and gift cards. The platform is styled with Tailwind CSS to ensure a responsive and user-friendly design.",
      livepath: "https://www.ekinum.com/",
      gitpath: null
    },
    {
      image: employeeManagement,
      header: "Employee Content Management System",
      made: "React, Node.js, Express.js, mySQL, CSS",
      intro:
      "The Employee Content Management System is a comprehensive platform for managing departments, employees, tasks, task reports, and leave requests.",
      fullIntro:
      "The Employee Content Management System is a comprehensive platform for managing departments, employees, tasks, task reports, and leave requests. Built with a React frontend and a Node.js/Express backend, it uses mySQL for data storage and is styled with CSS for a modern look. This system allows efficient task management and reporting, streamlining employee tasks.",
      livepath: null,
      gitpath: "https://github.com/jivanaryal/ems_cms",
    },
    {
      image: ecommerce,
      header: "Ecommerce Website",
      made: "React, npm packages, CSS, JavaScript",
      intro:
        "This E-commerce website showcases a variety of products with beautiful animations and filtering options.",
      fullIntro:
        "This E-commerce website showcases a variety of products with beautiful animations and filtering options. Users can easily browse products, add them to their cart, and make purchases. Built with a React frontend and enhanced with various npm packages, the site provides a seamless and engaging shopping experience.",
      livepath: "https://jivan-ecommerce.netlify.app/",
      gitpath: "https://github.com/jivanaryal/Ecommerce",
    },
    {
      image: colleges,
      header: "College Recommendation System",
      made: "React, Node.js, Express.js, SQL, Tailwind CSS",
      intro:
        "The College Recommendation System helps students find colleges that best match their preferences based on factors like location, courses, rating.",
      fullIntro:
        "The College Recommendation System helps students find colleges that best match their preferences based on factors like location, courses, rating, and recommend college. Built with a React frontend and a Node.js/Express backend, it provides a clean, user-friendly interface styled with Tailwind CSS. SQL is used to manage a robust database of colleges, and the system recommends colleges through efficient querying and filtering techniques.",
      livepath: null,
      gitpath: "https://github.com/jivanaryal/college-project",
    },
   
    {
      image: colorib,
      header: "Colorib Blog Site",
      made: "React, NodeJs, CSS",
      intro:
        "Colorib is a modern blog site built using TypeScript and Svelte. This platform allows users to explore various categories.",
      fullIntro:
        "Colorib is a modern blog site built using TypeScript and Svelte. This platform allows users to explore various categories such as Food, Technology, Business, and Popular Courses. With a clean and responsive design, Colorib provides an engaging reading experience and easy navigation across different topics.",
      livepath: "https://jivan-blog.netlify.app/",
      gitpath: "https://github.com/jivanaryal/blog",
    },
    {
      image: employeeDashboard,
      header: "Employee Dashboard",
      made: "React, Node.js, Express.js, MySQL",
      intro:
        "The Employee Dashboard is a powerful tool built using React, Node.js, Express.js, and MySQL.",
      fullIntro:
        "The Employee Dashboard is a powerful tool built using React, Node.js, Express.js, and MySQL. It allows users to make leave requests, view their job tasks, and submit task reports. This comprehensive dashboard enhances employee productivity and streamlines task management.",
      livepath: null,
      gitpath: "https://github.com/jivanaryal/EMS_EMP",
    },
    {
      image: clothingStore,
      header: "Online Clothing Store",
      made: "React, Node.js, Express.js, SQL, Tailwind CSS",
      intro:
        "This project is a fully-functional online clothing store built with a React frontend and a Node.js/Express backend.",
      fullIntro:
        "This project is a fully-functional online clothing store built with a React frontend and a Node.js/Express backend. It features a stylish and responsive interface using Tailwind CSS, user authentication, product management, and a shopping cart system. SQL is used for data management to ensure reliable storage of user data, orders, and product details.",
      livepath: null,
      gitpath: "https://github.com/jivanaryal/online-clothing-store",
    },
  ];
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: { type: "spring", stiffness: 120, delay: 0.1 },
    },
  };

  const toggleShowMore = (index) => {
    setShowMore((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div
      className="min-h-screen pt-20 bg-gradient-to-r animate-gradient-move text-white"
      id="projects"
    >
      <motion.h1
        className="text-center pt-6 text-4xl md:text-6xl font-extrabold pb-10 ext-transparent animate-gradient"
        variants={itemVariants}
      >
        Projects
      </motion.h1>
      <div className="flex flex-col md:gap-16 gap-8  ">
        {ProjectData.map((val, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-xl border border-gray-700 shadow-lg bg-[#0d192e] p-6 md:gap-8 gap-6 cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-transform"
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
            variants={cardVariants}
          >
            <motion.div className="w-full h-auto" whileHover={{ scale: 1.02 }}>
              <img
                src={val.image}
                alt="Project"
                className="rounded-md shadow-lg h-full w-full object-cover"
              />
            </motion.div>
            <motion.div className="flex flex-col gap-2 col-span-7">
              <h2 className="md:text-3xl sm:text-2xl mt-4 font-semibold">
                {val.header}
              </h2>
              <p className="text-gray-400 text-xs font-semibold">{val.made}</p>
              <p className="text-sm text-gray-300 mt-2">
                {showMore[i] ? val.fullIntro : val.intro}
              </p>
              <button
                onClick={() => toggleShowMore(i)}
                className="text-blue-400 mt-4 hover:underline"
              >
                {showMore[i] ? "Show Less" : "Show More"}
              </button>
            </motion.div>
            <div className="absolute  bottom-4 left-7 flex gap-4">
              {val.livepath ? (
                <a
                  href={val.livepath}
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl text-blue-400 border-2 rounded-full p-2 border-blue-400 hover:text-white transition-colors"
                >
                  <RiLiveLine />
                </a>
              ) : (
                <span className="text-2xl border-2 p-2 border-none text-gray-500">
                  <RiLiveLine />
                </span>
              )}
              <a
                href={val.gitpath}
                target="_blank"
                rel="noreferrer"
                className="text-2xl border-2 rounded-full p-2 border-blue-400 text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
