import React, { useState } from "react";
import mainStyles from "../assets/css/Main.module.css";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import BasicForm from "../components/forms/BasicForm";

function Home() {
  const baseUrl = "https://official-joke-api.appspot.com/random_joke";
  const baseUrl2 = "https://dog.ceo/api/breeds/image/random";
  // const baseUrl = process.env.API_BASE
  const second = null;
  const [first, setfirst] = useState("");
  const apiFunction = async () => {
    try {
      const apiResponse = await fetch(baseUrl, { method: "GET" });
      if (!apiResponse.ok) {
        throw new Error(`HTTP error! Status: ${apiResponse.status}`);
      }

      const API = await apiResponse.json();
      setfirst(API);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const apiFunction2 = async () => {
    try {
      const apiResponse = await fetch(baseUrl2, { method: "GET" });
      if (!apiResponse.ok) {
        throw new Error(`HTTP error! Status: ${apiResponse.status}`);
      }

      const API = await apiResponse.json();
      setfirst(API);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
          <BasicForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
