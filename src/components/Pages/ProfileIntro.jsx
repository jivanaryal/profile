import Rhombus from "../design/Rhombus";

const ProfileIntro = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen pt-20 text-[1.5rem] gap-4">
      <div className="col-span-7 flex flex-col gap-3">
        <p className="text-[#a19292ee]">Hello! I am</p>
        <h1>Jivan Aryal</h1>
        <h1 className="text-mainColor">MERN Stack Developer</h1>
        <p>
          I am a a passionate web developer who enjoys building interactive and
          user-friendly websites.This portfolio showcases some of the projects I
          have worked on, demonstrating my skills and creativity. Feel free to
          explore and get in touch with me if you have any inquiries or
          collaboration opportunities.
        </p>
      </div>
      <div className=" col-span-5  mx-auto">
        <Rhombus />
      </div>
    </div>
  );
};

export default ProfileIntro;
