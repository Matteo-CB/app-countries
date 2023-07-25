import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../themeSlice";

const Header = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  function hangleTheme() {
    dispatch(toggleTheme());
  }
  return (
    <header>
      <h1>Where in the world?</h1>
      <p onClick={hangleTheme}>
        <img
          src={
            theme === "dark"
              ? "./images/dark/moon-svgrepo-com.svg"
              : "./images/light/moon-svgrepo-com.svg"
          }
          alt="moon"
          width={30}
        />
        Dark mode
      </p>
    </header>
  );
};

export default Header;
