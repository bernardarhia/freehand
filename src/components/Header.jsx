import React, { useState } from "react"
import { navLists } from "../siteContents/navLists"
import { Link } from "gatsby"
import Button from "./sub_components/Button"
// Icons used in the header
import { FaTimes } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
// Logo for the header
import logo from "../images/head-logo.png";
const Header = () => {
  const [toggleMenuBar, setToggleMenuBar] = useState(true)

  const handleTogglerMenuBar = () => {
    console.log(toggleMenuBar);
    setToggleMenuBar(!toggleMenuBar)
    console.log(toggleMenuBar);
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 990) {
      setToggleMenuBar(false)
    } else {
      setToggleMenuBar(true)
    }
  })

  return (
    <nav className="nav">
      <div className="logo__container">
        <div className="logo">
              <img src={logo} alt={logo}/>
        </div>
      </div>
      <div className={toggleMenuBar ? "nav__container hide" : "nav__container"}>
        <ul className="nav__lists">
          {navLists.map((navList, index) => {
            return (
              <li key={index}>
                <Link to={navList.path} className={navList.class}>
                  {navList.name}
                </Link>
              </li>
            )
          })}
          <div className="nav__btns">
            <Button
              btnShape="btn__curved"
              btnSize="btn__small"
              btnStyle="btn__secondary__outline"
              isButton={false}
              to="/"
            >
              Sign Up
            </Button>
            <Button
              btnColor="btn__secondary"
              btnShape="btn__curved"
              btnSize="btn__small"
              isButton={false}
              to="/"
            >
              Login In
            </Button>
          </div>
        </ul>
      </div>
      <div className="toggle" onClick={handleTogglerMenuBar}>
        {toggleMenuBar ? <GiHamburgerMenu /> : <FaTimes />}
      </div>
    </nav>
  )
}

export default Header
