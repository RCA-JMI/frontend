import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Container from "../container/container.component";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex flex-col items-center justify-between shadow text-white fixed top-0 w-full z-10 bg-[color:var(--primary-color)]">
      <Container>
        <section className="flex items-center justify-between w-full">
          <Link to="/" className="flex gap-2 py-4  ">
            {/* <img src="" alt="Logo" /> */}
            <h1 className="text-lg font-bold">RCA JMI</h1>
          </Link>
          {/* For Screens greater than 768px */}
          <div className="hidden md:flex">
            <ul className="list-none flex items-center gap-1 font-[500] text-xl">
              <Link
                to="/"
                className="py-4 px-6  hover:bg-white hover:text-[color:var(--primary-text-color)]"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="py-4 px-6 hover:bg-white hover:text-[color:var(--primary-text-color)]"
              >
                About Us
              </Link>
              <Link
                to="/results"
                className="py-4 px-6 hover:bg-white hover:text-[color:var(--primary-text-color)]"
              >
                Results
              </Link>
              <Link
                to="/contact-us"
                className="py-4 px-6 hover:bg-white hover:text-[color:var(--primary-text-color)]"
              >
                Contact Us
              </Link>
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
          <Link
            to="/"
            className="py-3 w-full flex px-4 sm:px-8 hover:bg-white hover:text-[color:var(--primary-text-color)]"
            onClick={() => setToggle(!toggle)}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="py-3 w-full flex px-4 sm:px-8  hover:bg-white hover:text-[color:var(--primary-text-color)]"
            onClick={() => setToggle(!toggle)}
          >
            About Us
          </Link>
          <Link
            to="/results"
            className="py-3 w-full flex px-4 sm:px-8 hover:bg-white hover:text-[color:var(--primary-text-color)]"
            onClick={() => setToggle(!toggle)}
          >
            Results
          </Link>
          <Link
            to="/contact-us"
            className="py-3 w-full flex px-4 sm:px-8  hover:bg-white hover:text-[color:var(--primary-text-color)]"
            onClick={() => setToggle(!toggle)}
          >
            Contact Us
          </Link>
        </ul>
      ) : null}
    </section>
  );
};

export default Navbar;
