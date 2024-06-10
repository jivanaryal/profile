import logo from "../../assets/images/logo.png";
const Navbar = () => {
  const NavData = [
    {
      name: "about",
      value: 800,
    },
    {
      name: "projects",
      value: 1600,
    },
    {
      name: "skills",
      value: 5200,
    },
    {
      name: "contact",
      value: 6000,
    },
    {
      name: "resume",
      value: null,
    },
  ];

  const CursorPointer = (value) => {
    window.scrollTo({ behavior: "smooth", top: value });
  };
  return (
    <div className="pt-6">
      <div className="flex  items-center gap-32 w-full">
        <h1 className=" text-mainColor w-[300px]">
          <img src={logo} alt="" />
        </h1>
        <div className="flex w-full justify-evenly items-center">
          {NavData.map((val, i) => {
            return (
              <div key={i} className="">
                <div
                  className="capitalize text-xl cursor-pointer"
                  onClick={() => CursorPointer(val.value)}
                >
                  {val.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
