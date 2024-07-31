import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-black">
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-8">
            <div className="p-3">
              <h2 className="fw-bold text-light">
                Want tips & tricks to optimize your flow?
              </h2>
              <p className="text-light">
                Sign up for our newsletter and stay up to date
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex d-flex align-items-center mb-4">
            <div className="p-3 d-flex flex-column flex-md-row align-items-start align-items-md-center w-100">
              <input
                type="text"
                className="form-control mb-3 mb-md-0 me-md-3"
                placeholder="Enter text"
              />
              <button
                type="button"
                className="btn btn-success h-100 text-black fw-bold"
                style={{
                  "--bs-btn-padding-y": ".1rem",
                  "--bs-btn-padding-x": "1.9rem",
                  "--bs-btn-font-size": ".75rem",
                }}
              >
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
