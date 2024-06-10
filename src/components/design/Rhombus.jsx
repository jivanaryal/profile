import "./Rhombus.css";
import profile from "../../assets/images/profile.png";
const Rhombus = () => {
  return (
    <div className="container">
      <div className="rhombus rhombus-front">
        <div className="profile">
          {/* Add your profile details or image here */}
          <img src={profile} alt="Profile" className="profile-image" />
        </div>
      </div>
      <div className="rhombus rhombus-back"></div>
    </div>
  );
};

export default Rhombus;
