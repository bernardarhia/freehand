import React from "react"
import ExperienceHeader from "./sub_components/ExperienceHeader"
import { serviceCards } from "../siteContents/serviceCards"
import Button from "../components/sub_components/Button"

const Service = () => {
  return (
    <>
      <ExperienceHeader />

      <div className="services">
        <div className="services__cards">
          {serviceCards.map((serviceCard, index) => {
            return (
              <div className="card" key={index}>
                <div className="icon">
                  <img src={serviceCard.icon} alt="" />
                </div>
                <div className="header">
                  <p>{serviceCard.head}</p>
                </div>
                <div className="content">
                  <p>{serviceCard.content}</p>
                </div>
                <Button>Learn more</Button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Service
