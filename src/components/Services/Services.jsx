import React from "react";
import Card from "../Card/Card";
import "./Services.css";
import Rusume from "./resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'
function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition={duration:1,type:'spring'}

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awasome">
        <span
          style={{
            color: darkMode ? "white" : "",
          }}
        >
          My Awasome
        </span>
        <span>Services</span>
        <span>
          Lorem ispum is simpley dummy text of printing of printing Lorem <br />
          ispum is simpley dummy text of printing
        </span>
        <a href={Rusume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div        
        initial={{left:'25rem'}}
        whileInView={{left:'14rem'}}
        transition={transition}

        style={{ left: "14rem" }}>
          <Card
            emoji="img/heartemoji.png"
            heading="Design"
            detail="Figma, Sketch, Photoshop, Adobe, Adobe xd"
          />
        </motion.div>
        {/* second card */}

        <div style={{ left: "-4rem", top: "12rem" }}>
          <Card
            emoji="img/glasses.png"
            heading="Developer"
            detail="Html, Css, JavaScript, React,Figma, Sketch, Photoshop, Adobe xd"
          />
        </div>

        {/* 3 card */}

        <motion.div
         initial={{left:'25rem'}}
         whileInView={{left:'14rem'}}
         transition={transition}
        style={{ left: "12rem", top: "19rem" }}>
          <Card
            emoji="img/humble.png"
            heading="UI/UX"
            detail="Lorem ispum dummy text are usually use in section where we need some random text"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
