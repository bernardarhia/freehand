import React from "react"
import Button from "./sub_components/Button"
import {BsPlayFill} from "react-icons/bs";
const Showcase = () => {
  return (
    <section className="showcase">
      <div className="showcase__content">
        <div className="showcase__content__header">
          <p className="head">Freehand your brand with a beautiful website</p>
          <p className="para">
            Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
            varius enim in eros .
          </p>
        </div>
        <div className="showcase__cta">
         <div className="cta__first">

          <Button
            btnColor="btn__primary"
            btnSize="btn__small"
            btnShape="btn__curved"
            isButton={false}
            to="/"
          >
            View Projets
          </Button>
         </div>
         <div className="cta__second">

          <Button
            btnSize="btn__small"
            btnShape="btn__curved"
            btnStyle="btn__primary__outline"
            isButton={false}
            to="/"
          >
            Learn more
          </Button>
         </div>
        </div>
      </div>


      <div className="showcase__image">
          <div className="navigators">
              <img src={"https://res.cloudinary.com/everich1/image/upload/v1602011322/group_wdfb0r.png"} alt="group"/>
              <button className="left"><BsPlayFill /></button>
              <button className="right"><BsPlayFill /></button>
          </div>
      </div>
    </section>
  )
}

export default Showcase
