import { RiLiveLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import amazon from "../../assets/images/amazon.png";
import colorib from "../../assets/images/colorib.png";
import hubit from "../../assets/images/hubit.png";
import portfolio from "../../assets/images/oldport.png";
import employeeManagement from "../../assets/images/cms.jpeg";
import employeeDashboard from "../../assets/images/ems.jpeg";
import ecommerce from "../../assets/images/ecommerce.png";

const Projects = () => {
  const ProjectData = [
    {
      image: amazon,
      header: "Amazon Clone",
      made: "React, TypeScript, Vite, CSS",
      intro:
        "This project is an Amazon clone, a fully functional e-commerce platform built using React and TypeScript. It features a responsive design, user authentication, product listings, a shopping cart, and a checkout process. The application is powered by Vite for a fast development environment and styled using CSS.",
      buttons: "live",
      code: "code",
      livepath:
        "https://653c798a7a555000071af97b--jivan-amazonclone.netlify.app/",
      gitpath: "https://github.com/jivanaryal/AmazonSiteClone",
    },
    {
      image: employeeManagement,
      header: "Employee Content Management System",
      made: "React, Node.js, Express.js, mySQL, CSS",
      intro:
        "The Employee Content Management System is a comprehensive platform for managing departments, employees, tasks, task reports, and leave requests. Built with a React frontend and a Node.js/Express backend, it uses mySQL for data storage and is styled with CSS for a modern look.",
      buttons: "live",
      code: "code",
      livepath: null,
      gitpath: "https://github.com/jivanaryal/ems_cms",
    },
    {
      image: ecommerce,
      header: "Ecommerce Website",
      made: "React, npm packages, CSS, JavaScript",
      intro:
        "This E-commerce website showcases a variety of products with beautiful animations and filtering options. Users can easily browse products, add them to their cart, and make purchases. Built with a React frontend and enhanced with various npm packages, the site provides a seamless and engaging shopping experience.",
      buttons: "live",
      code: "code",
      livepath: "https://jivan-ecommerce.netlify.app/",
      gitpath: "https://github.com/jivanaryal/Ecommerce",
    },

    {
      image: colorib,
      header: "Colorib Blog Site",
      made: "TypeScript, Svelte, CSS",
      intro:
        "Colorib is a modern blog site built using TypeScript and Svelte. This platform allows users to explore various categories such as Food, Technology, Business, and Popular Courses. With a clean and responsive design, Colorib provides an engaging reading experience and easy navigation across different topics.",
      buttons: "live",
      code: "code",
      livepath: "https://jivan-blog.netlify.app/",
      gitpath: "https://github.com/jivanaryal/blog",
    },
    {
      image: employeeDashboard,
      header: "Employee Dashboard",
      made: "React, Node.js, Express.js, MySQL",
      intro:
        "The Employee Dashboard is a powerful tool built using React, Node.js, Express.js, and MySQL. It allows users to make leave requests, view their job tasks, and submit task reports. This comprehensive dashboard enhances employee productivity and streamlines task management.",
      buttons: "live",
      code: "code",
      livepath: null,
      gitpath: "https://github.com/jivanaryal/EMS_EMP",
    },
    {
      image: hubit,
      header: "Hubit Institute Site",
      made: "React, CSS, Figma",
      intro:
        "The Hubit Institute site is designed to help students explore different courses, view class schedules, and contact the institute. Built with React for a dynamic user interface, styled with CSS for a modern look, and prototyped in Figma, this site provides an intuitive and engaging experience for students and staff.",
      buttons: "live",
      code: "code",
      livepath: "https://hubitclone.netlify.app/",
      gitpath: "https://github.com/jivanaryal/hubitclone",
    },

    {
      image: portfolio,
      header: "Personal Portfolio",
      made: "React, CSS",
      intro:
        "This is my personal portfolio site hosted on Netlify. It showcases my skills, projects, and personal information using React.js, CSS, and various packages. The site features a clean, modern design and provides detailed information about my work and experience.",
      buttons: "live",
      code: "code",
      livepath: "https://jivanaryal.netlify.app/",
      gitpath: "https://github.com/jivanaryal/portfolio",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }, // faster animation
  };

  return (
    <div className="min-h-screen  md:pt-20 pt-10  " id="projects">
      <div>
        <h1 className="lg:text-7xl text-4xl font-bold text-center">Projects</h1>
        <div className="flex flex-col md:gap-14 gap-4">
          {ProjectData.map((val, i) => {
            return (
              <motion.div
                key={i}
                className="md:grid  border-[1px] border-gray-800 shadow-md shadow-gray-700 outline-none p-4 mt-10 md:grid-cols-12 md:gap-10 gap-4 md:pt-12 pt-10"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="left-image md:col-span-6 col-span-full w-full bg-red-500 max-h-[300px] md:mb-2 mb-6 ">
                  <img src={val.image} alt="" className="h-full w-full" />
                </div>
                <div className="right flex flex-col md:gap-4 gap-2 md:col-span-6 col-span-full lg:text-[1.5rem] text-[1rem] ">
                  <div className="lg:text-4xl text-2xl capitalize">
                    {val.header}
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#A9BBD3]"> Made With: </span>
                    <span className="text-mainColor capitalize">
                      {val.made}
                    </span>
                  </div>
                  <p className="">{val.intro}</p>
                  <div className="flex gap-6">
                    <a
                      href={val.livepath}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <div className="border-2  rounded hover:shadow-md hover:shadow-mainColor border-mainColor lg:text-lg text-base text-mainColor flex items-center gap-2 lg:px-4 lg:py-2 px-3 py-1  capitalize">
                        <RiLiveLine />
                        <button
                          className={`${
                            val.livepath === null &&
                            "line-through cursor-none hover:shadow-transparent hover:shadow-none"
                          }`}
                        >
                          {val.buttons}
                        </button>
                      </div>
                    </a>
                    <a
                      href={val.gitpath}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="border-2 border-mainColor text-mainColor lg:text-lg text-base  flex items-center gap-2 lg:px-4 lg:py-2 px-3 py-1 rounded hover:shadow-md hover:shadow-mainColor capitalize">
                        <FaGithub />
                        <button>{val.code}</button>
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
