import React, { useState } from "react";
import "../../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../../services/api/pokemon";

function Navbar() {
  const [showButton, setShowButton] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Login", "Home", "Account"];
  const navOptions = options.map((option) => {
    return (
      <NavLink to={`/${option.toLocaleLowerCase()}`} className="logo-tag">
        {option}
      </NavLink>
    );
  });
  //how you call RTK query
  // const { data, error, isLoading } = useGetPokemonByNameQuery("ditto");

  //need to add the redirects to the correct place using react router
  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={{ appear: 1000, exit: 1500 }}
        classNames="my-node"
        unmountOnExit
        onEnter={() => {
          setShowButton(false);
        }}
        onExit={() => {
          setShowButton(true);
        }}
      >
        <nav>
          {navOptions}
          {/* <div className="logo-tag">Logo</div>
          <div className="logo-tag">Login</div>
          <NavLink to={`/home`} className="logo-tag">
            Home
          </NavLink> */}
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </nav>
      </CSSTransition>

      <CSSTransition
        in={showButton}
        timeout={{ enter: 6000, appear: 6000, exit: 6000 }}
        classNames="burger-menu"
        unmountOnExit
        onEnter={() => {
          setIsOpen(false);
        }}
        onExit={() => {
          setIsOpen(true);
        }}
      >
        <div
          onClick={() => {
            setIsOpen(true);
          }}
          className={showButton ? "burger-icon" : null}
        >
          <FontAwesomeIcon icon={faBars} size="3x" />
        </div>
      </CSSTransition>
    </>
  );
}

export default Navbar;
