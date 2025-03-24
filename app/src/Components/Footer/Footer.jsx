import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  const navigate = useNavigate();
  const redirectContactus = () => {
    // console.log("hello contact us");
    navigate("/Contact-us");
    // navigate("/path", { replace: true });
  };
  return (
    <>
      <div className="footer">
        <div className="contact-us fw-italic fs-1 d-flex">
          Contact us
          <div
            className="arw"
            onClick={() => {
              redirectContactus();
            }}
          >
            <BsArrowRight />
          </div>
        </div>
        <div className="Agency-impatient d-flex justify-content-between">
          <div
            style={{
              width: "200px",
              justifyContent: "center",
              textAlign: "center",
              fontFamily: "cursive",
            }}
          >
            <h2>The Agency For Impatient Brands</h2>
          </div>
          <div className="text-white">
            <h6 className="text-white">Our Services At</h6>
            <p className="text-secondary">London</p>
            <p className="text-secondary">India</p>
            <p className="text-secondary">USA</p>
            <p className="text-secondary">
              © 2025-2025 E-commerce WebSite. All Rights Reserved.{" "}
            </p>
          </div>
          <div className="text-white">
            <h6 className="text-white">Our Vision To Customer</h6>
            <p className="text-secondary">Serve Best Hospitality</p>
            <p className="text-secondary">Serve Best Quality</p>
            <p className="text-secondary">
              Make Them feel Satisfied with our services
            </p>
            <p className="text-secondary">Customer Care no : 0731-243576</p>
          </div>
        </div>
      </div>
    </>
  );
};
