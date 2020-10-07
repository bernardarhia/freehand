import React from "react"
import { navLists } from "../siteContents/navLists"
import { Link } from "gatsby"
import Button from "./sub_components/Button"
const Header = () => {
  return (
    <nav className="nav">
      <div className="logo__container">
        <h3 className="logo">Logo</h3>
      </div>
      <ul className="nav__lists">
        {navLists.map((navList, index) => {
          return (
            <li  key={index}>
              <Link to={navList.path} className={navList.class}>{navList.name}</Link>
            </li>
          )
        })}
      </ul>

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
    </nav>
  )
}

export default Header
