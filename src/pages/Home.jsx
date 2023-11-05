import React from "react";
import { Link } from "react-router-dom";
import FbPic from "../assets/fb.png";

const Home = () => {
  return (
    <div
      className="d-flex  justify-content-center align-items-center"
      style={{ width: "100%", height: "100vh", background: "#E4F5FE" }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center p-4 rounded"
        style={{
          height: "500px",
          background: "white",
          border: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={FbPic}
          alt="fb"
          style={{ width: "70px", height: "70px", borderRadius: "50%" }}
        />
        <h2 className="mt-4">Apply</h2>
        <h4
          className="my-4 text-center"
          style={{ color: "#232323", fontSize: "24px", fontWeight: "700" }}
        >
          In need of a review? Kindly tap on the "Apply"{" "}
        </h4>
        <h4
          className="text-center"
          style={{ color: "#232323", fontSize: "24px", fontWeight: "700" }}
        >
          button.
        </h4>
        <Link
          to="/validation"
          className="px-4 p-2 mt-4 border rounded text-white"
          style={{ background: "#267CE5", textDecoration: "none" }}
        >
          Apply
        </Link>

        <h5 className="mt-4" style={{ fontSize: "14px" }}>
          Suit @ 2023
        </h5>
      </div>
    </div>
  );
};

export default Home;
