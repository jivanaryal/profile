import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactDetails = [
  {
    title: " Offer job Opportunity ?",
    description:
      " I am open to discussing potential job opportunities or collaborations. With experience in web development and software engineering, I am interested in roles that allow me to work on exciting and challenging projects. If you have a project or role in mind, feel free to reach out and let's discuss!",
  },
  {
    title: " Connect ?",
    description:
      " Networking is key in the tech industry, and I'm always looking to meet new people and expand my professional circle. Whether you're a fellow developer, designer, or entrepreneur, I'd love to chat and learn more about your work. Let's grab a virtual coffee and see where the conversation takes us!",
  },
  {
    title: " Build Something ?",
    description:
      "I have a passion for developing innovative web applications that solve complex problems. Whether it's building a custom e-commerce platform or a cutting-edge web app, I'm always ready for a new challenge. Let's create something amazing together!",
  },
];

const logos = [
  {
    logo: <FaFacebook />,
    path: "https://www.facebook.com/aryal.jeevan.90/",
  },
  {
    logo: <AiOutlineTwitter />,
    path: "https://twitter.com/jivan_aryal16",
  },
  {
    logo: <FaGithub />,
    path: "https://github.com/jivanaryal",
  },
  {
    logo: <AiFillLinkedin />,
    path: "https://www.linkedin.com/in/jivan-aryal/",
  },
];

const WantTo = () => {
  return (
    <div className="min-h-screen">
      <div>
        <h1 className="text-7xl text-center">Wants To</h1>

        <div className="grid grid-cols-3 gap-10 pt-20">
          {ContactDetails.map((val, i) => {
            return (
              <div key={i} className="flex flex-col gap-6">
                <div className="text-center text-4xl text-mainColor">
                  {val.title}
                </div>
                <div className="text-[1.2rem] ">{val.description}</div>
              </div>
            );
          })}
        </div>
        <div className="     flex justify-center mr-10 pt-10  gap-10 mt-8 md:mt-10 ml-4 md:ml-32">
          {logos.map((val, i) => {
            return (
              <Link to={val.path} key={i}>
                <div
                  className={`border-2 rounded-full text-white hover:text-mainColor hover:shadow-md hover:shadow-mainColor transition-all delay-100 duration-200 p-3  shadow-2xl border-transparent text-4xl `}
                >
                  {val.logo}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WantTo;
