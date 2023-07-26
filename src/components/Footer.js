import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io/profile/Matteo-CB">
          Frontend Mentor
        </a>
      </p>
      <p>
        <NavLink to={"/legal"}>Mentions légales</NavLink>
      </p>
    </footer>
  );
};

export default Footer;
