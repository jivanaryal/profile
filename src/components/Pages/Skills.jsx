const FrontendData = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "React",
  },
  {
    name: "NextJs",
  },
];

const backendData = [
  {
    name: "Node.js",
  },
  {
    name: "Express.js",
  },
  {
    name: "MongoDB",
  },
  {
    name: "MYSQL",
  },
];

const Miscellaneous = [
  {
    name: "git",
  },
  {
    name: "office packages",
  },
  {
    name: "Canva",
  },
  {
    name: "Basic Video Editing",
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen py-60">
      <div>
        <h1 className="md:text-7xl text-5xl text-center">Skills</h1>
        <div className="flex flex-col flex-nowrap gap-10 pt-10">
          <div className="flex flex-col gap-3">
            <h1 className="md:text-4xl text-3xl">FrontEnd</h1>
            <div className="flex  flex-wrap gap-4">
              {FrontendData.map((val, i) => {
                return (
                  <div key={i} className="skill-button">
                    {val.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col flex-nowrap gap-4">
            <h1 className="md:text-4xl text-3xl">Backend and Database</h1>
            <div className="flex flex-wrap gap-4">
              {backendData.map((val, i) => {
                return (
                  <div key={i} className="flex skill-button">
                    {val.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="md:text-4xl text-3xl">Miscellaneous</h1>
            <div className="flex flex-wrap gap-4">
              {Miscellaneous.map((val, i) => {
                return (
                  <div key={i} className="skill-button">
                    {val.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
