import React from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'

function Works() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition={duration:2,type:'spring'}

  return (
    <div className="works">
      {/* left side */}
      <div className="awasome">
        <span style={{
            color: darkMode ? "white" : "",
          }}>Woks for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ispum is simpley dummy text of printing of printing Lorem <br />
          ispum is simpley dummy text of printing
          <br />
          ispum is simpley dummy text of printing text of printing
          <br />
          Lorem ispum is simpley dummy text
        </span>
          <button className="button s-button">Hire me</button>
        

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* rigth side */}
      <div className="w-right">
        <motion.div
        initial={{rotate:45}}
        whileInView={{rotate:0}}
        viewport={{margin:'-40px'}}
        transition={{duration:3.5,type:'spring'}}
        
        
        className="w-mainCircle">
            <div className="w-secCircle">
                <img src="img/upwork.png" alt="" />
            </div>
            <div className="w-secCircle">
                <img src="img/fiverr.png" alt="" />
            </div>
            <div className="w-secCircle">
                <img src="img/amazon.png" alt="" />
            </div>
            <div className="w-secCircle">
                <img src="img/shopify.png" alt="" />
            </div>

            <div className="w-secCircle">
                <img src="img/face1.png" alt="" />
            </div>
        </motion.div>
        {/* background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>

      </div>
       
    </div>
  );
}

export default Works;
