import React, { useState, useEffect } from "react"
import Button from "./sub_components/Button"
const Ada = () => {
  const [screenWidth, setScreenWidth] = useState(false)


    window.addEventListener("resize", () => {
      window.innerWidth <= 768
        ? setScreenWidth(true)
        : setScreenWidth(false)
    })

    console.log(screenWidth)
  return (
    <div className="ada">
      <div className="ada__content">
        <div className="header">
          <p>Get started today and try 30 days free</p>
        </div>
        <div className="paragraph">
          <p>
            No contact, no set-up costs, just awesome way to organise your
            money.
          </p>
        </div>
        <div className="ada__btn">
          <Button
            to="/"
            btnColor="btn__normal"
            btnShape={screenWidth? "":"btn__rounded"} 
            btnStyle="btn__secondary__outline"
            btnSize={screenWidth ? "btn__mobile":"btn__small"}
          >
            Try it for free
          </Button>
          <Button to="/" btnShape={screenWidth? "":"btn__rounded"} btnSize={screenWidth ? "btn__mobile":"btn__small"}>
            Watch demo
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Ada
