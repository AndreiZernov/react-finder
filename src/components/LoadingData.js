import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../images/lottie-react-logo.json'


const LoadingData = () =>
    <div>
    <div className="d-flex mt-5 text-center" >
      <div className="d-flex p-1 flex-column mx-auto">
        <h1 style={{fontWeight: "700"}} className="display-2 my-2">
          React Finder
        </h1>
      </div>
    </div>
      <Lottie options={{
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }}
        height={400}
        width={400}
      />

    </div>


export default LoadingData
