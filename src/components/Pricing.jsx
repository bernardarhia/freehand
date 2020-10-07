import React from "react"
import Button from "./sub_components/Button"
import PricingCard from "./sub_components/PricingCard"
import {
  starterPlan,
  monthlyPlan,
  yearlyPlan,
} from "../siteContents/pricingCards";
const Pricing = () => {
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
            (bar, index) => (
              <div className={`bar ${bar}`} key={index}></div>
            )
          )}
        </div>
        <div className="pricing__cards">
          <PricingCard {...starterPlan}><Button to="/" btnShape="btn__rounded" btnSize="btn__small" btnStyle="btn__secondary__outline">Get Started</Button></PricingCard>
          <PricingCard {...monthlyPlan}><Button to="/" btnShape="btn__rounded" btnSize="btn__small" btnStyle="btn__secondary__outline">Get Started</Button></PricingCard>
          <PricingCard {...yearlyPlan}><Button to="/" btnShape="btn__rounded" btnSize="btn__small" btnColor="btn__secondary">Get Started</Button> </PricingCard>
        </div>
      </div>
    </div>
  )
}

export default Pricing
