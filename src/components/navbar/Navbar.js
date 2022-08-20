import React, { useState } from "react";
import "../../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <nav>
          <div>Logo</div>
          <div>Login</div>
          <div>Home</div>
        </nav>
      ) : (
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {/* <FontAwesomeIcon
            icon={faBars}
            size="3x"
     
          /> */}
          <h1>Helloooo</h1>
        </div>
      )}
    </>
  );
}

export default Navbar;
