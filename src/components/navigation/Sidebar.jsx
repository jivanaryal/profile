const Sidebar = ({ sidebar, setSideBar }) => {
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
    setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: value });
    }, 400);

    setSideBar(!sidebar);
    console.log("hello");
  };
  return (
    <div>
      {NavData.map((val, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              CursorPointer(val.value);
            }}
          >
            {val.name}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
