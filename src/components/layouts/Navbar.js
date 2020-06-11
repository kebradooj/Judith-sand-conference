import React from "react";
import logo from "../../logo.jpg";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <MainContainer>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/speakers">
                Speakers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/events">
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </MainContainer>
  );
};

export default Navbar;

// Styled component styles

const MainContainer = styled.div`
  nav {
    background: var(--light-green) !important;
  }

  .nav-link {
    color: white !important;
    &:hover {
      background: var(--light-orange) !important;
      color: var(--light-green) !important;
    }
  }

  img {
    width: 2.5rem;
    border-radius: 50%;
  }

  .active {
    background: var(--light-pink)
  }
`;
