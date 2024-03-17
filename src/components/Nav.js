import { useEffect, useState } from "react";
import { MdMenuOpen } from "react-icons/md";
const Nav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  useEffect(() => {});
  return (
    <nav style={{ zIndex: "999" }} className="nav__bar ">
      <div className="container">
        <MdMenuOpen
          style={{ zIndex: "99999", backgroundColor: "#231f20" }}
          onClick={() => {
            setIsNavVisible((prev) => !prev);
          }}
          size={40}
        />
        {isNavVisible ? (
          <ul className={`nav-list`}>
            <li id="home-li">
              <a href="#home">HOME</a>
            </li>
            <li id="about-li">
              <a href="#about">ABOUT</a>
            </li>
            <li id="project-li">
              <a href="#projects">PROJECTS</a>
            </li>
            <li id="contact-li">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        ) : null}{" "}
        <h3 className="initial">Pravesh Meena.</h3>
      </div>
    </nav>
  );
};
export default Nav;
