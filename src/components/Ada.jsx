import React from "react"
import Button from "./sub_components/Button"
const Ada = () => {


   
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
            btnShape="btn__rounded" 
            btnStyle="btn__secondary__outline"
            btnSize="btn__small"
          >
            Try it for free
          </Button>
          <Button to="/" btnShape="btn__rounded" btnSize= "btn__mobile">
            Watch demo
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Ada
