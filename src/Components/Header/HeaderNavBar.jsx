import React from "react";
import TranscureLogo from "../../assets/images/TranscureLogo.png";
import { faGear, faBell } from "@fortawesome/free-solid-svg-icons";
import IconButton from "./IconButton/IconButton";

const HeaderNavBar = () => {
  return (
    <div className="header-nav">
      <div className="logo">
        <img
          src={TranscureLogo}
          alt="Transcure Company Logo"
          className="header-logo"
          width="220px"

        />
      </div>
      <div className="icon-btn">
        <span className="btn-Gear">
          <IconButton icon={faGear} />
        </span>
        <span className="btn-Bell ">
          <IconButton icon={faBell} />
        </span>
      </div>
    </div>
  );
};

export default HeaderNavBar;
