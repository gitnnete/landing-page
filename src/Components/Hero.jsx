import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className=" text-light">
      <div className="container-fluid text-center mt-5">
        <h5 className=" text-success fw-bold p-2">
          Growing With Data Analytics
        </h5>
        <p className="fw-bold fs-2">Grow With Data</p>
        <div className="d-flex justify-content-center align-items-center">
          <p className="fw-bold fs-5 mb-0 me-2">Fast, Flexible financing for</p>
          <TypeAnimation
            className="fw-bold fs-5 mb-0 text-success"
            sequence={["BTB", 1000, "BTC", 1000, "SASS", 1000]}
            speed={50} // Custom speed
            wrapper="span"
            repeat={Infinity} // Repeat forever
          />
        </div>
        <div className="m-2">
          <p className=" fs-5 fw-bold text-secondary ">
            Monitor your data analytics to increase revenue for BTB, BTC, & SASS
            platforms
          </p>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-success text-black fw-bold"
            style={{
              "--bs-btn-padding-y": ".7rem",
              "--bs-btn-padding-x": "1.9rem",
              "--bs-btn-font-size": ".85rem",
            }}
          >
            Custom button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
