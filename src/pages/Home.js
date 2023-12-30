import React from "react";
import mainStyles from "../assets/css/Main.module.css";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        <div className={mainStyles.homePage}>
          <h1>Welcome to My Website</h1>
          <p>
            This is the home page of my website. Here you can find information
            about me and my work.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
