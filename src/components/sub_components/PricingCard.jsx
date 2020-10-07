import React from "react"
const PrincingCard = ({
  // children,
  header,
  price,
  duration,
  paragraph,
  contentColor
}) => {
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
      {/* <div className="pricing__button">
          {children}
      </div> */}
    </div>
  )
}

export default PrincingCard
