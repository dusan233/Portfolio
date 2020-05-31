import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="wrap">
          <div className="header__logo">
            <p>DJ</p>
          </div>
          <div className="header__navigation">
            <div className="navigation__icons">
              <div>
                <a
                  href="https://github.com/dusan233"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconContext.Provider value={{ className: "icons" }}>
                    <AiFillGithub />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
