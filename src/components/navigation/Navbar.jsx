import logo from "../../assets/images/logo.png";
import { VscMenu } from "react-icons/vsc";
// import Sidebar from "./Sidebar";
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
      value: 5200,
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
    window.scrollTo({ behavior: "smooth", top: value });
  };
  return (
    <div className="pt-6 w-[90%] mx-auto">
      <div className="flex  items-center gap-32 w-full">
        <h1 className=" text-mainColor w-[300px]">
          <img src={logo} alt="" />
        </h1>
        <div className="flex w-full justify-evenly items-center">
          {NavData.map((val, i) => {
            return (
              <div key={i}>
                <div
                  className={`${
                    show ? "hidden" : "visible"
                  } capitalize text-xl cursor-pointer`}
                  onClick={() => CursorPointer(val.value)}
                >
                  {val.name}
                </div>
              </div>
            );
          })}
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
