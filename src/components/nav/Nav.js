import React from "react";
import Settings from "./settings.svg";
import Git from "./github-icon.svg";
const Nav = () => {
  return (
    <nav className="nav">
      <img src={Settings} alt="Settings gear" />
      <p>Mush Formatter</p>
      <a href="https://github.com/Digibear-io/mush-format" target="_new">
        <img src={Git} alt="Github" />
      </a>
    </nav>
  );
};

export default Nav;
