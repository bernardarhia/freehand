import React from "react"
const PrincingCard = (props) => {
  const [element] = props
const {header, price, duration, paragraph,contentColor} = element;
  return (
    <div className="pricing__card">
      <div className="header">
        <p>{header}</p>
      </div>
      <div className="price">
        <p className={contentColor}>{price}</p>
      </div>
      <div className="duration">
        <p>{duration}</p>
      </div>
      <div className="content">
        <p>{paragraph}</p>
      </div>
      <div className="pricing__button">
          {props.children}
      </div>
    </div>
  )
}

export default PrincingCard
