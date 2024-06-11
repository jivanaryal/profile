import myPhoto from "../../assets/images/jivan.jpg"; // Replace with the actual path to your photo

const About = () => {
  return (
    <section className="min-h-screen text-white my-16">
      <h1 className=" text-center md:text-7xl text-5xl">About Me</h1>
      <div className="  px-6">
        <div className="md:grid md:grid-cols-12 gap-10 pt-24 ">
          <div className="border-mainColor border-4 w-fit md:ml-0 ml-10 md:col-span-5 col-span-full  md:max-h-[500px] overflow-hidden max-h-[300px]   mb-6">
            <img
              src={myPhoto}
              alt="Jivan Aryal"
              className="rounded-lg  h-full w-full transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className=" flex flex-col  gap-4 md:col-span-6 col-span-full  md:text-[1.5rem] text-[1rem]">
            <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
            <p className="justify-start mb-4">
              Hello, I'm <span className="font-semibold">Jivan Aryal</span>. I'm
              a dedicated Software Engineer with expertise in the MERN stack. I
              create dynamic web applications using MongoDB, Express.js, React,
              and Node.js.
            </p>
            <p className="text-lg mb-4">
              I also have basic skills in Canva and Photoshop for graphic
              design. I'm passionate about exploring new technologies and
              contributing to open-source projects.
            </p>
            <p className="text-lg">
              I'm open to exciting opportunities and collaborations. Connect
              with me on{" "}
              <a
                href="https://www.linkedin.com/in/jivan-aryal/"
                className="text-blue-500"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
