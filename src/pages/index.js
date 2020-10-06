import React from "react"
import Button from "../components/sub_components/Button"
import "../styles/app.scss";
export default function Home() {
  return (
    <div>
      <Button
        isButton={false}
        btnColor="btn__primary"
        btnShape="btn__rounded"
        btnSize="btn__medium"
        btnStyle="btn__outlined"
        to="/"
      >
        Login
      </Button>
    </div>
  )
}
