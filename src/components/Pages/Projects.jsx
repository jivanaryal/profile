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
import { useState } from "react";

const Projects = () => {
  const [showMore, setShowMore] = useState({});

  const ProjectData = [
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
      image: colleges,
      header: "College Recommendation System",
      made: "React, Node.js, Express.js, SQL, Tailwind CSS",
      intro:
        "The College Recommendation System helps students find colleges that best match their preferences based on factors like location, major, tuition, and acceptance rate.",
      fullIntro:
        "The College Recommendation System helps students find colleges that best match their preferences based on factors like location, major, tuition, and acceptance rate. Built with a React frontend and a Node.js/Express backend, it provides a clean, user-friendly interface styled with Tailwind CSS. SQL is used to manage a robust database of colleges, and the system recommends colleges through efficient querying and filtering techniques.",
      livepath: null,
      gitpath: "https://github.com/jivanaryal/college-project",
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
      image: amazon,
      header: "Amazon Clone",
      made: "React, TypeScript, Vite, CSS",
      intro:
        "This project is an Amazon clone, a fully functional e-commerce platform built using React and TypeScript.",
      fullIntro:
        "This project is an Amazon clone, a fully functional e-commerce platform built using React and TypeScript. It features a responsive design, user authentication, product listings, a shopping cart, and a checkout process. The application is powered by Vite for a fast development environment and styled using CSS.",
      livepath: "https://jivan-amazonclone.netlify.app/",
      gitpath: "https://github.com/jivanaryal/AmazonSiteClone",
    },
    {
      image: colorib,
      header: "Colorib Blog Site",
      made: "TypeScript, Svelte, CSS",
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
    {
      image: hubit,
      header: "Hubit Institute Site",
      made: "React, CSS, Figma",
      intro:
        "The Hubit Institute site is designed to help students explore different courses, view class schedules, and contact the institute.",
      fullIntro:
        "The Hubit Institute site is designed to help students explore different courses, view class schedules, and contact the institute. Built with React for a dynamic user interface, styled with CSS for a modern look, and prototyped in Figma, this site provides an intuitive and engaging experience for students and staff.",
      livepath: "https://hubitclone.netlify.app/",
      gitpath: "https://github.com/jivanaryal/hubitclone",
    },
    {
      image: portfolio,
      header: "Personal Portfolio",
      made: "React, CSS",
      intro:
        "This is my personal portfolio site hosted on Netlify. It showcases my skills, projects, and personal information.",
      fullIntro:
        "This is my personal portfolio site hosted on Netlify. It showcases my skills, projects, and personal information using React.js, CSS, and various packages. The site features a clean, modern design and provides detailed information about my work and experience.",
      livepath: "https://jivanaryal.netlify.app/",
      gitpath: "https://github.com/jivanaryal/portfolio",
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

  return (
    <div
      className="min-h-screen pt-20 bg-gradient-to-r animate-gradient-move text-white"
      id="projects"
    >
      <h1 className="lg:text-7xl text-4xl font-bold text-center mb-12 text-white">
        Projects
      </h1>
      <div className="flex flex-col md:gap-16 gap-8 md:mx-12 mx-4">
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
            <motion.div className="flex flex-col gap-4 col-span-7">
              <h2 className="text-3xl font-semibold">{val.header}</h2>
              <p className="text-gray-400">{val.made}</p>
              <p className="text-lg text-gray-300 mt-2">
                {showMore[i] ? val.fullIntro : val.intro}
              </p>
              <button
                onClick={() => toggleShowMore(i)}
                className="text-blue-400 mt-4 hover:underline"
              >
                {showMore[i] ? "Show Less" : "Show More"}
              </button>
            </motion.div>
            <div className="absolute  bottom-7 left-7 flex gap-8">
              {val.livepath ? (
                <a
                  href={val.livepath}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-blue-400 hover:text-white transition-colors"
                >
                  <RiLiveLine />
                </a>
              ) : (
                <span className="text-xl text-gray-500">
                  <RiLiveLine />
                </span>
              )}
              <a
                href={val.gitpath}
                target="_blank"
                rel="noreferrer"
                className="text-xl text-gray-400 hover:text-white transition-colors"
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
