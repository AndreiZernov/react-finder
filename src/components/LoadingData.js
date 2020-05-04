import React, { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../images/lottie-react-logo.json";
import { TimelineMax } from "gsap";

const LoadingData = () => {
  useEffect(() => {
    new TimelineMax().fromTo(
      ".loading",
      1,
      { opacity: 0, scale: 0.6 },
      { opacity: 1, scale: 1 }
    );
  }, []);

  return (
    <div>
      <div className="d-flex loading mt-5 text-center">
        <div className="d-flex p-1 flex-column mx-auto">
          <h1 style={{ fontWeight: "700" }} className="display-2 my-2">
            React Finder
          </h1>
        </div>
      </div>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={400}
        width={400}
      />
    </div>
  );
};

export default LoadingData;
