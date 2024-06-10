import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const SocialSite = () => {
  const SocialSite = [
    {
      images: <MdOutlineMail />,
    },
    {
      images: <FaLinkedin />,
    },
    {
      images: <FaGithub />,
    },
  ];

  return (
    <div>
      <div>
        {SocialSite.map((val, i) => {
          return (
            <div key={i} className="text-3xl p-2">
              {val.images}
            </div>
          );
        })}
      </div>
      <div className="border-l-4 absolute  rounded-md left-[20px] h-44"></div>
    </div>
  );
};

export default SocialSite;
