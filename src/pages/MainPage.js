import React from "react";
import Hero from "../components/Hero";

const MainPage = () => (
  <div className="page">
    <Hero
      title="React Finder"
      subtitle={`Your guide to React JavaScript library \n Everything about Learning React for Free at one place`}
      btn="Learn More"
      target="/overview"
    />
  </div>
);

export default MainPage;
