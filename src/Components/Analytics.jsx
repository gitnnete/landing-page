import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className=" bg-light my-5">
      <div className="container mt-5">
        <div className="row pt-5">
          <div className="col-md-6 order-md-1 order-1 mb-3">
            <img src={Laptop} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 order-md-2 order-2">
            <h5 className="text-success mb-3">DATA ANALYTICS DASHBOARD</h5>
            <h3 className="fw-bold mb-3">MANAGE DATA ANALYTICS CENTRALLY</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit excepturi fugiat, tempora maxime nostrum nulla
              ratione itaque quis adipisci natus praesentium cum nisi
              perferendis repudiandae eum debitis pariatur sapiente impedit
              corporis, repellendus, consequuntur vero modi! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Tempore quae totam, nisi
              nihil enim mollitia at odit placeat adipisci quia.
            </p>
            <button
              type="button"
              className="btn btn-dark text-success mb-5 align-items-center"
              style={{
                "--bs-btn-padding-y": ".7rem",
                "--bs-btn-padding-x": "1.9rem",
                "--bs-btn-font-size": ".85rem",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
