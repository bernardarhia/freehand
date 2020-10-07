import React from "react"
import Features from "../components/Features";
import Header from "../components/Header";
import Service from "../components/Service";
import Showcase from "../components/Showcase";
import "../styles/app.scss";
export default function Home() {
  return (
    <div className="container">
      <Header />
      <Showcase />
      <Service />
      <Features />
    </div>
  )
}
