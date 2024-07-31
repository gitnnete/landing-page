import React from "react";

const Footer = () => {
  return (
    <div className="bg-light pt-3">
      <div className="container-fluid">
        <div className="mb-3">
          <a className="navbar-brand fs-3 fw-bold text-success" href="#">
            React.
          </a>
        </div>
        <div>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            enim animi dolorum deleniti fugit natus est nihil cumque quibusdam
            doloremque asperiores, soluta nemo commodi quod voluptate
            consequatur beatae ipsam ea, possimus nesciunt?
          </p>
        </div>
        <div className="text-center my-5 fs-3 container ">
          <a href="https://www.facebook.com" className="text-success mx-5 fs-4">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.twitter.com" className="text-success mx-5 fs-4">
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            className="text-success mx-5 fs-4"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" className="text-success mx-5 fs-4">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <div>
          <div className="row">
            <div className="col-md-3">
              <h5 className="ms-2 mb-2">Solutions</h5>
              <ul className=" list-unstyled">
                <li>Analytics</li>
                <li>Marketing</li>
                <li>Commerce</li>
                <li>Insights</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="ms-2 mb-2">Support</h5>
              <ul className=" list-unstyled">
                <li>Pricing</li>
                <li>Documentation</li>
                <li>Guides</li>
                <li>API Status</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="ms-2 mb-2">Company</h5>
              <ul className=" list-unstyled">
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Press</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="ms-2 mb-2">Legal</h5>
              <ul className=" list-unstyled">
                <li>Claim</li>
                <li>Policy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
