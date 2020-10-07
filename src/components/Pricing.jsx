import React from "react"
import Button from "./sub_components/Button"
import PricingCard from "./sub_components/PricingCard"
import { starterPlan } from "../siteContents/pricingCards"
const Pricing = () => {
  console.log(starterPlan)
  return (
    <div className="pricing">
      <div className="pricing__content">
        <div className="header">
          <p>Choose the plan that’s right for your business</p>
        </div>
        <div className="paragraph">
          <p>
            Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
            varius enim in eros .
          </p>
        </div>
      </div>
      {/* Pricing bars */}
      <div className="pricing__bars">
        <div className="bars">
          {["primary__bar", "secondary__bar", "danger__bar"].map(
            (bar, index) => {
              return (
                <>
                  <div className={`bar ${bar}`} key={index}></div>
                </>
              )
            }
          )}
          <PricingCard header={starterPlan.header} />
        </div>
      </div>
    </div>
  )
}

export default Pricing
