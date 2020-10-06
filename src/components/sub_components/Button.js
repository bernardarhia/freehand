import React from "react"
import { Link } from "gatsby"
const Button = ({
  isButton,
  children,
  btnStyle,
  btnSize,
  btnColor,
  btnShape,
  to
}) => {
  // Button class names
  const BTN_SIZES = ["btn__small", "btn__medium", "btn__large", "btn__mobile"]
  const BTN_COLORS = ["btn__normal", "btn__primary", "btn__secondary"]
  const BTN_STYLES = ["btn__normal__outline","btn__primary__outline","btn__secondary__outline"]
  const BTN__SHAPES = ["btn__normal", "btn__rounded", "btn__curved"]

  // checking if classes exist then add them to buttons
  const btnHasSize = BTN_SIZES.includes(btnSize) ? btnSize : ""
  const btnHasColor = BTN_COLORS.includes(btnColor) ? btnColor : ""
  const btnHasStyle = BTN_STYLES.includes(btnStyle) ? btnStyle : BTN_STYLES[0];
  const btnHasShape = BTN__SHAPES.includes(btnShape) ? btnShape : ""
  return (
    <>
      {isButton ? (
        <button
          className={`btn ${btnHasSize} ${btnHasColor} ${btnHasStyle} ${btnHasShape}`}
        >
          {children}
        </button>
      ) : (
        <Link
          className={`btn ${btnHasSize} ${btnHasColor} ${btnHasStyle} ${btnHasShape}`}
          to={to}
        >
          {children}
        </Link>
      )}
    </>
  )
}

export default Button
