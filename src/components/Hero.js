import React from 'react'
import { Link } from 'react-router-dom'


const Hero = ({title, subtitle, target, btn}) =>
  <div className="d-flex text-center py-5 my-5" >
    <div className="d-flex p-1 flex-column m-auto p-lg-5">
      <h1 style={{fontWeight: "700"}} className="display-2 my-2">
        {title}
      </h1>
      <div className="w-75 my-4 px-xl-5 mx-auto h5" style={{color:"rgb(89, 190, 255)", whiteSpace: "pre-line"}}>
        {subtitle}
      </div>
      {
        btn && <Link style={{fontWeight: "800"}} className="btn btn-light px-3 px-sm-5 btn-lg rounded-pill m-auto" to={target}>
        {btn}
        </Link>
      }
    </div>
  </div>


export default Hero
