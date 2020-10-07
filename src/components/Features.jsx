import React from "react"
import ExperienceHeader from "../components/sub_components/ExperienceHeader"
const Features = () => {
  const featureCards = [
    {
      img:
        "https://res.cloudinary.com/everich1/image/upload/v1602011325/layer_xfecfl.png",
      text: "120 million curious readers and growing.",
    },
    {
      img:
        "https://res.cloudinary.com/everich1/image/upload/v1602011324/guy_z8qpwe.png",
      text: "Expand your reading.Expand your mind.",
    },
  ]
  return (
    <>
      <ExperienceHeader />

      <div className="features">
        <div className="features__cards">
          {featureCards.map((featureCard, index) => {
            return (
              <div className="card" key={index}>
                <img src={featureCard.img} alt="Something" />
                <p>{featureCard.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Features
