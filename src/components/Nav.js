import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && `nav__black`}`}>
      <div className="nav__contents">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-fb5f1.appspot.com/o/netflix-logo-png-2582.png?alt=media&token=484873b6-59a5-41f0-83a2-364737a7c0cd"
          alt=""
          className="nav__logo"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-fb5f1.appspot.com/o/avatar_netflix.png?alt=media&token=d03e16a3-6bb8-4f66-84a8-50ebf9237d87"
          alt=""
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
