import logo from "../../assets/images/logo.png";
import { VscMenu } from "react-icons/vsc";
// import resume from "../../../public/resume.pdf";

const Navbar = ({ show, sidebar, setSideBar }) => {
  console.log(show);

  const NavData = [
    {
      name: "about",
      url: "#about",
      value: 800,
    },
    {
      name: "projects",
      url: "#projects",
      value: 1600,
    },
    {
      name: "skills",
      url: "#skills",
      value: 4800,
    },
    {
      name: "contact",
      url: "#contact",
      value: 5500,
    },
    {
      name: "resume",
      url: "#resume",
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

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    console.log(target);
    if (target === "#resume") {
      window.open("./resume.pdf", "_blank");
    } else {
      const location = document.querySelector(target).offsetTop;
      console.log(location);
      window.scrollTo({ behavior: "smooth", top: location - 30 });
    }
  };

  return (
    <div className="fixed top-0 z-50  w-full bg-[#0A192F] border-2 border-[#0A192F] shadow-md shadow-gray-800 text-white">
      <div className="pt-6 w-[90%] mx-auto">
        <div className="flex items-center gap-32 w-full">
          <h1 className="text-mainColor mb-2 lg:w-[280px] md:w-[300px] w-[500px]">
            <img
              src={logo}
              alt="Logo"
              className="cursor-pointer"
              onClick={() => CursorPointer(0, null)}
            />
          </h1>
          <div className="flex w-full lg:justify-evenly md:justify-between items-center">
            {NavData.map((val, i) => (
              <div key={i}>
                <a
                  href={val.url}
                  onClick={handleClick}
                  className={`${
                    show ? "hidden" : "visible"
                  } capitalize text-[1.5rem] cursor-pointer`}
                >
                  {val.name}
                </a>
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
    </div>
  );
};

export default Navbar;
