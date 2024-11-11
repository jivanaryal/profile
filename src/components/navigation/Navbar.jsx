import logo from "../../assets/images/logo.png";
import { VscMenu } from "react-icons/vsc";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = ({ show, sidebar, setSideBar }) => {
  const NavData = [
    { name: "about", url: "#about", value: 800 },
    { name: "projects", url: "#projects", value: 1600 },
    { name: "skills", url: "#skills", value: 4800 },
    { name: "contact", url: "#contact", value: 5500 },
    { name: "resume", url: null, value: null },
  ];

  const CursorPointer = (value, name) => {
    if (name === "resume") {
      window.open("./resume.pdf", "_blank");
    } else {
      window.scrollTo({ behavior: "smooth", top: value });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");

    if (target === "#resume") {
      window.open("./resume.pdf", "_blank");
    } else {
      const location = document.querySelector(target).offsetTop;
      window.scrollTo({ behavior: "smooth", top: location - 30 });
    }
  };

  return (
    <div className="fixed top-0 w-full bg-[#0A192F] border-b-2 border-[#0A192F] shadow-lg text-white z-50">
      <div className="pt-6 w-[90%] mx-auto flex items-center justify-between">
        <motion.h1
          className="text-mainColor mb-2 cursor-pointer"
          onClick={() => CursorPointer(0, null)} // Scroll to top on logo click
          whileHover={{ scale: 1.1 }}
        >
          <img src={logo} alt="Logo" className="w-[200px] md:w-[250px]" />
        </motion.h1>
        <div className="hidden lg:flex w-full justify-evenly items-center">
          {NavData.map((val, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={val.url}
                onClick={handleClick}
                className="capitalize text-lg cursor-pointer p-2 hover:bg-[#1a2d4a] transition-all duration-200 rounded"
              >
                {val.name}
              </a>
            </motion.div>
          ))}
        </div>

        <div
          className="lg:hidden text-3xl cursor-pointer"
          onClick={() => setSideBar(!sidebar)}
        >
          <VscMenu />
        </div>
      </div>

      {/* Sidebar for mobile view */}
      {sidebar && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#0A192F] bg-opacity-90 z-40 flex items-center justify-center">
          <div className="text-white flex flex-col gap-6">
            {NavData.map((val, i) => (
              <a
                href={val.url}
                key={i}
                onClick={handleClick}
                className="text-xl capitalize"
              >
                {val.name}
              </a>
            ))}
            <a
              href="#resume"
              className="text-xl text-center mt-4"
              onClick={() => window.open("./resume.pdf", "_blank")}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
