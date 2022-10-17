import React from 'react'
import { Link } from "react-router-dom";

function Description() {
  return (
    <div>
    <marquee direction="right"><Link to ="/signup">For booking click here</Link></marquee>
    <div class ="image-section1">
      <img src ="./philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg"></img>
    </div>
    </div>
  )
}

export default Description