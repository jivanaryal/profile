import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import SocialSite from "../components/design/SocialSite";
import { useState, useEffect } from "react";
import Sidebar from "../components/navigation/Sidebar";

const Layout = () => {
  const [show, setShow] = useState(window.innerWidth < 850);
  const [sidebar, setSideBar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShow(window.innerWidth < 850);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      {sidebar ? (
        <div>
          <Navbar show={show} sidebar={sidebar} setSideBar={setSideBar} />
          <Sidebar sidebar={sidebar} setSideBar={setSideBar} />
        </div>
      ) : (
        <div>
          <div className="fixed bottom-[178px] md:block hidden">
            <SocialSite />
          </div>
          <div className="w-full mx-auto">
            <div>
              <Navbar show={show} sidebar={sidebar} setSideBar={setSideBar} />
            </div>
            <div className="w-[90%] mx-auto">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
