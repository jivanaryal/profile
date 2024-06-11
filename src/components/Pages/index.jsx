import About from "./About";
import ProfileIntro from "./ProfileIntro";
import Projects from "./Projects";
import Reserver from "./Reserver";
import Skills from "./Skills";
import WantTo from "./WantTo";

const Index = () => {
  return (
    <div>
      <ProfileIntro />
      {/* <About /> */}
      <Projects />
      <Skills />
      <WantTo />
      <Reserver />
    </div>
  );
};

export default Index;
