import React,{useState} from "react"
import { navLists } from "../siteContents/navLists"
import { Link } from "gatsby"
import Button from "./sub_components/Button"
import {FaTimes} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
const Header = () => {
  const [toggleMenuBar, setToggleMenuBar] = useState(true);

  const handleTogglerMenuar = ()=>{
      setToggleMenuBar(!toggleMenuBar);
  }

  window.addEventListener("resize", () => {})

  return (
    <nav className="nav">
      <div className="logo__container">
        <h3 className="logo">Logo</h3>
      </div>
      <div className="nav__container" style={{display:toggleMenuBar === false ?"block":"none" }}>

      <ul className="nav__lists">
        {navLists.map((navList, index) => {
          return (
            <li  key={index}>
              <Link to={navList.path} className={navList.class}>{navList.name}</Link>
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
      <div className="toggle" onClick={handleTogglerMenuar}>
           {toggleMenuBar ? <GiHamburgerMenu />:<FaTimes />}
      </div>
    </nav>
  )
}

export default Header
