import React from "react";
import Hero from "../components/Hero";

const NotFoundPage = () => (
  <div className="page">
    <Hero
      title="NOT FOUND"
      subtitle="You just hit a route that doesn&#39;t exist... the sadness."
      btn="Back to Main Page"
      target="/"
    />
  </div>
);

export default NotFoundPage;
