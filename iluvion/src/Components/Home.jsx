import React from "react";
import "./Home.css";
import App from "../App";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <App />
      <div className="container-fluid banner">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <p className="right-business mx-auto text-center">
              The Right Systems & Solutions to Transform your Business
            </p>
            <p className="grow-your-business">
              Grow your business, connect with customers, and get more
              productive with the right technologies.
            </p>
            <div className="row ">
              <div className="col-lg-4 col-sm-12 mx-auto mb-5 text-center">
                <button className="get-started">Get Started</button>
              </div>
              <div className="col-lg-4 col-sm-12 mx-auto text-center">
                <button className="learn-more">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mx-auto banner-img"></div>
        </div>
      </div>
      <div className="container success-pillars ">
        <p className="mx-auto text-center">Our Success Pillars</p>
        <p className="mx-auto text-center">
          A tripod of innovative solutions enabling businesses to thrive with
          digital
        </p>
        <div className="row">
          <div className="col-lg-4 col-sm-12 business-transformation-col">
            <p className="mx-auto text-center">Business Transformation</p>
            <p>
              We assist businesses to transform digitally, lowering costs,
              improving efficiency and maximizing productivity. From strategy to
              implementation, we provide a robust guide for business success.
            </p>
            <button className="">Learn More</button>
          </div>
          <div className="col-lg-4 col-sm-12">
            <p className="mx-auto text-center">Business Transformation</p>
            <p>
              We assist businesses to transform digitally, lowering costs,
              improving efficiency and maximizing productivity. From strategy to
              implementation, we provide a robust guide for business success.
            </p>
            <button className="">Learn More</button>
          </div>
          <div className="col-lg-4 col-sm-12">
            <p className="mx-auto text-center">Business Transformation</p>
            <p>
              We assist businesses to transform digitally, lowering costs,
              improving efficiency and maximizing productivity. From strategy to
              implementation, we provide a robust guide for business success.
            </p>
            <button className="">Learn More</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
