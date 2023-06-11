import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import Container from "../container/container.component";

import "./navbar.style.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex flex-col items-center justify-between shadow text-white fixed top-0 w-full z-10 bg-[color:var(--primary-color)]">
      <Container>
        <section className="flex items-center justify-between w-full tracking-wider">
          <Link to="/" className="flex gap-2 py-3 ">
            {/* <img src="" alt="Logo" /> */}
            <h1 className="text-2xl font-semibold">RCA JMI</h1>
          </Link>
          {/* For Screens greater than 768px */}
          <div className="hidden md:flex">
            <ul className="list-none flex items-center font-[500]">
              <NavLink
                to="/"
                className="py-4 px-6 text-md  hover:bg-white hover:text-[color:var(--primary-text-color)]"
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className="py-4 px-6 text-md  hover:bg-white hover:text-[color:var(--primary-text-color)]"
              >
                About Us
              </NavLink>
              <NavLink
                to="/results"
                className="py-4 px-6 text-md  hover:bg-white hover:text-[color:var(--primary-text-color)]"
              >
                Results
              </NavLink>
              <NavLink
                to="/contact-us"
                className="py-4 px-6 text-md  hover:bg-white hover:text-[color:var(--primary-text-color)]"
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
          {/* For Screens less than 768px */}
          <div className="md:hidden">
            <button className="py-4" onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <RxCross2 className="text-[22px]" />
              ) : (
                <RxHamburgerMenu className="text-[22px]" />
              )}
            </button>
          </div>
        </section>
      </Container>
      <DropMenu setToggle={setToggle} toggle={toggle} />
    </nav>
  );
}

interface IDROP_MENU {
  setToggle: Function;
  toggle: boolean;
}

const DropMenu: React.FC<IDROP_MENU> = ({ setToggle, toggle }) => {
  return (
    <section className="w-full md:hidden">
      {toggle ? (
        <ul className="list-none flex flex-col items-end justify-center w-full text-sm font-[500]">
          <NavLink
            to="/"
            className="py-3 w-full flex px-4 sm:px-8 hover:bg-white hover:text-[color:var(--primary-text-color)]"
            onClick={() => setToggle(!toggle)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className="py-3 w-full flex px-4 sm:px-8  hover:bg-white hover:text-[color:var(--primary-text-color)]"
            onClick={() => setToggle(!toggle)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/results"
            className="py-3 w-full flex px-4 sm:px-8 hover:bg-white hover:text-[color:var(--primary-text-color)]"
            onClick={() => setToggle(!toggle)}
          >
            Results
          </NavLink>
          <NavLink
            to="/contact-us"
            className="py-3 w-full flex px-4 sm:px-8  hover:bg-white hover:text-[color:var(--primary-text-color)]"
            onClick={() => setToggle(!toggle)}
          >
            Contact Us
          </NavLink>
        </ul>
      ) : null}
    </section>
  );
};

export default Navbar;
