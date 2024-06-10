import myPhoto from "../../assets//images/jivan.jpg"; // Replace with the actual path to your photo

const About = () => {
  return (
    <section className="min-h-screen text-white my-16">
      <h1 className=" text-center text-7xl">About Me</h1>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-10 pt-24">
          <div className="left-image col-span-6 w-full max-h-[500px] ">
            <img
              src={myPhoto}
              alt="Jivan Aryal"
              className="rounded-lg w-full transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="right flex flex-col gap-4 col-span-6 text-[1.5rem]">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-4">
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
