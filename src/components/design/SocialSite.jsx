import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const SocialSite = () => {
  const SocialSite = [
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

  return (
    <div className="md:block hidden">
      <div>
        {SocialSite.map((val, i) => {
          return (
            <a href={val.links} key={i}>
              {" "}
              <div className="text-3xl p-2">{val.images}</div>
            </a>
          );
        })}
      </div>
      <div className="border-l-4 absolute  rounded-md left-[20px] h-44"></div>
    </div>
  );
};

export default SocialSite;
