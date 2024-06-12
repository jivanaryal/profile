import React from "react";
import logo from "../../assets/images/logo.png";
import { VscMenu } from "react-icons/vsc";
// import resume from "../../../public/resume.pdf";

const Navbar = ({ show, sidebar, setSideBar }) => {
  console.log(show);

  const NavData = [
    {
      name: "about",
      value: 800,
    },
    {
      name: "projects",
      value: 1600,
    },
    {
      name: "skills",
      value: 4800,
    },
    {
      name: "contact",
      value: 5500,
    },
    {
      name: "resume",
      value: null, // No scroll value for resume
    },
  ];

  const CursorPointer = (value, name) => {
    if (name === "resume") {
      window.open("./resume.pdf", "_blank");
    } else {
      window.scrollTo({ behavior: "smooth", top: value });
    }
  };

  return (
    <div className="pt-6 w-[90%] mx-auto">
      <div className="flex items-center gap-32 w-full">
        <h1 className="text-mainColor md:w-[350px] w-[550px]">
          <img src={logo} alt="Logo" />
        </h1>
        <div className="flex w-full lg:justify-evenly md:justify-between items-center">
          {NavData.map((val, i) => (
            <div key={i}>
              <div
                className={`${
                  show ? "hidden" : "visible"
                } capitalize text-[1.5rem] cursor-pointer`}
                onClick={() => CursorPointer(val.value, val.name)}
              >
                {val.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute right-4 top-5 text-3xl"
        onClick={() => {
          setSideBar(!sidebar);
        }}
      >
        {show && <VscMenu />}
      </div>
    </div>
  );
};

export default Navbar;
