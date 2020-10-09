import React from "react"
const PrincingCard = (props) => {

  return (
    <div className="pricing__card">
      <div className="header">
        <p>{props[0].header}</p>
      </div>
      <div className="price">
        <p className={props[0].contentColor}>{props[0].price}</p>
      </div>
      <div className="duration">
        <p>{props[0].duration}</p>
      </div>
      <div className="content">
        <p>{props[0].paragraph}</p>
      </div>
      <div className="pricing__button">
          {props.children}
      </div>
    </div>
  )
}

export default PrincingCard
