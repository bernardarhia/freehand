import React from "react"
import Header from "../components/Header";
import Showcase from "../components/Showcase";
import "../styles/app.scss";
export default function Home() {
  return (
    <div className="container">
      <Header />
      <Showcase />
    </div>
  )
}
