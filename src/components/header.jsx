import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

const header = () => {
  const [theme, setTheme] = useState("light-theme");

  const changeTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
    document.body.classList.toggle("light-theme", newTheme === "light-theme");
    document.body.classList.toggle("dark-theme", newTheme === "dark-theme");
  };
  return (
    <>
      <div className="header">
        <center>Todo App</center>
        {theme === "light-theme" ? (
          <IoSunnySharp onClick={changeTheme} />
        ) : (
          <FaMoon onClick={changeTheme} />
        )}
      </div>
    </>
  );
};
export default header;
