import amazon from "../../assets/images/amazon.png";
import colorib from "../../assets/images/colorib.png";
import hubit from "../../assets/images/hubit.png";
import portfolio from "../../assets/images/oldport.png";
import employeeManagement from "../../assets/images/cms.jpeg";
import employeeDashboard from "../../assets/images/ems.jpeg";
import { RiLiveLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
// import { Link } from "react-router-dom";

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
  return (
    <div className="min-h-screen pt-20">
      <div>
        <h1 className="text-7xl text-center">Projects</h1>
        <div className="flex flex-col gap-16">
          {ProjectData.map((val, i) => {
            return (
              <div key={i} className="grid grid-cols-12 gap-10 pt-24">
                <div className="left-image col-span-6 w-full max-h-[300px] min-h-[300px]">
                  <img src={val.image} alt="" className="" />
                </div>
                <div className="right flex flex-col gap-4 col-span-6 text-[1.5rem] ">
                  <div className="text-4xl capitalize">{val.header}</div>
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
                      <div className="border-2 border-mainColor text-mainColor flex items-center gap-2 px-4 py-2 capitalize">
                        <RiLiveLine />
                        <button
                          className={`${
                            val.livepath === null && "line-through cursor-none"
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
                      <div className="border-2 border-mainColor text-mainColor flex items-center gap-2 px-4 py-2 capitalize">
                        <FaGithub />
                        <button>{val.code}</button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
