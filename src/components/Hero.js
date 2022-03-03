import React from "react"
import heros from "../images/hero-images.png";

const Hero = () => {
    return (
        <div className="hero-div">
            <img src={heros} alt="" className="hero-img"/>
            <h1 className="hero-h1">Online Experiences</h1>
            <p className="hero-p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>

    )
}

export default Hero