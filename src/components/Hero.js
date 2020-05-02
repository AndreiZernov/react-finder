import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TimelineMax } from "gsap";

const Hero = ({ title, subtitle, target, btn }) => {
  useEffect(() => {
    new TimelineMax().fromTo(
      ".hero",
      1,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 }
    );
  }, []);

  return (
    <div className="d-flex hero text-center py-5 my-5">
      <div className="d-flex p-1 flex-column m-auto p-lg-5">
        <h1 style={{ fontWeight: "700" }} className="display-2 my-2">
          {title}
        </h1>
        <div
          className="w-75 my-4 px-xl-5 mx-auto h5"
          style={{ whiteSpace: "pre-line" }}
        >
          {subtitle}
        </div>
        {btn && (
          <Link
            style={{ fontWeight: "800" }}
            className="btn btn-light px-3 px-sm-5 btn-lg rounded-pill m-auto"
            to={target}
          >
            {btn}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
