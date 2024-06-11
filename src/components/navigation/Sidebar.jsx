import React from "react";
import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Sidebar = ({ sidebar, setSideBar }) => {
  const socialSites = [
    {
      icon: <MdOutlineMail />,
      link: "mailto:your.email@example.com",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/your-linkedin-profile/",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/your-github-profile/",
    },
  ];
  const NavData = [
    {
      name: "about",
      value: 790,
    },
    {
      name: "projects",
      value: 1580,
    },
    {
      name: "skills",
      value: 5370,
    },
    {
      name: "contact",
      value: 6000,
    },
    {
      name: "resume",
      value: null,
    },
  ];

  const CursorPointer = (value) => {
    setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: value });
    }, 400);

    setSideBar(!sidebar);
    console.log("hello");
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div className="" initial="hidden" animate="visible">
      {NavData.map((val, i) => {
        return (
          <motion.div
            key={i}
            className="cursor-pointer mb-10  h-full mt-10  text-white p-4  rounded-md shadow-md relative border-2 w-64 ml-[-25px] capitalize py-3 text-center text-xl border-gray-600 rounded-md"
            onClick={() => {
              CursorPointer(val.value);
            }}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {val.name}
          </motion.div>
        );
      })}

      <div className="flex items-center gap-5 mt-20  ">
        <hr className="w-5/12 border-b-4" />
        <div className="flex items-center">
          {socialSites.map((val, i) => {
            return (
              <div key={i} className="text-4xl p-2">
                {val.icon}
              </div>
            );
          })}
        </div>
        <hr className="w-5/12 border-b-4 " />
      </div>
    </motion.div>
  );
};

export default Sidebar;
