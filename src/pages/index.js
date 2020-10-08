import React from "react"
import Ada from "../components/Ada";
import Features from "../components/Features";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
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
      <Pricing />
      <Ada />
    </div>
  )
}
