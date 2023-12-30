import React from "react";
import mainStyles from "../assets/css/Main.module.css";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        <div className={mainStyles.homePage}>
          <h1>This is About Page</h1>
          <p>
            This is the about page of my website. Here you can find information
            about me and my work.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
