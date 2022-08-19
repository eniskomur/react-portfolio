import React from "react";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import "./Intro.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'
function Intro() {
   
  const transition={duration:2,type:'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span
            style={{
              color: darkMode ? "white" : "",
            }}
          >
            Hy I Am
          </span>
          <span>Enis Kömür</span>
          <span>
            Forentend Developer with high level of experience in web designing
            and development, producting the Qulity work
          </span>
        </div>
        <button className="button i-button">hire me</button>
        <div className="i-icons">
          <img src="img/github.png" alt="" />
          <img src="img/linked.png" alt="" />
          <img src="img/instagram.png" alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src="img/vector1.png" alt="" />
        <img src="img/vector2.png" alt="" />
        <img src="img/boy.png" alt="" />
        <motion.img 
        initial={{left:'-36%'}}
        whileInView={{left:'-24%'}}
        transition={transition}
        src="img/glassesimoji.png" alt="" />
        <motion.div
       
         initial={{left:'74%',top:'-4%'}}
         whileInView={{left:'68%'}}  
         transition={transition}
        
        style={{ top: "-4%", left: "68%" }}
        className="floating-div">
          <FloatingDiv image="img/crown.png" txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
         initial={{left:'9rem',top:'18rem'}}
         whileInView={{left:'0rem'}}  
         transition={transition}
        
        style={{ top: "18rem", left: "0rem" }}
        className="floating-div">
          <FloatingDiv
            image="img/thumbup.png"
            txt1="Best Desing"
            txt2="Award"
          />
        </motion.div>

        {/* blur divs */}

        <div className="blur"></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
