import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Sidebar = ({ sidebar, setSideBar }) => {
  const socialSites = [
    {
      images: <MdOutlineMail />,
      links: "mailto:jeevanaryal7947@gmail.com",
    },
    {
      images: <FaLinkedin />,
      links: "https://www.linkedin.com/in/jivan-aryal/",
    },
    {
      images: <FaGithub />,
      links: "https://www.github.com/jivanaryal/",
    },
  ];
  const NavData = [
    {
      name: "about",
      value: 750,
    },
    {
      name: "projects",
      value: 1580,
    },
    {
      name: "skills",
      value: 5400,
    },
    {
      name: "contact",
      value: 6100,
    },
    {
      name: "resume",
      value: null,
    },
  ];

  const CursorPointer = (value, name) => {
    if (name === "resume") {
      window.open("/resume.pdf", "_blank");
    } else {
      setTimeout(() => {
        window.scrollTo({ behavior: "smooth", top: value });
      }, 400);
    }
    setSideBar(!sidebar);
    console.log("hello");
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div className="mt-32" initial="hidden" animate="visible">
      {NavData.map((val, i) => {
        return (
          <motion.div
            key={i}
            className="cursor-pointer mb-2  h-full mt-8  text-white p-4  border-mainColor shadow-md relative border-2 w-64 ml-[-25px] capitalize py-3 text-center text-xl  rounded-md"
            onClick={() => {
              CursorPointer(val.value, val.name);
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
        <hr className="w-5/12 border-b-4 border-b-mainColor" />
        <div className="flex items-center">
          {socialSites.map((val, i) => {
            return (
              <a href={val.links} key={i}>
                {" "}
                <div className="text-4xl p-2">{val.images}</div>
              </a>
            );
          })}
        </div>
        <hr className="w-5/12 border-b-4 border-b-mainColor" />
      </div>
    </motion.div>
  );
};

export default Sidebar;
