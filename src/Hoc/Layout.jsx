import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import SocialSite from "../components/design/SocialSite";

const Layout = () => {
  return (
    <div>
      <div className="fixed bottom-[178px]">
        <SocialSite />
      </div>
      <div className="w-[87%] mx-auto">
        <div>
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
