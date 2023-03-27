import React, { useContext } from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Crown from "../../img/crown.png";
import thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import { themeContext } from "../../Context";
import { motion, spring } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Dharmendra Patidar</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the quality work.
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icon">
          <img src={Github} alt="github" />
          <img src={LinkedIn} alt="linkedin" />
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="vector2" />
        <img src={Boy} alt="boy" />
        <motion.img src={glassesimoji} 
        initial={{ left: '-36%'}}
        whileInView={{ left: '-24%'}}
        transition={transition}
        alt="glassesimoji" />
        <motion.div 
        initial={{ top:'-4%', left:'74%'}}
        whileInView={{left: '68%'}}
        transition={transition}
        style={{ top: "-4%", left: "68%" }}
        className="floating-div">
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
         initial={{ top:'18rem', left:'9rem'}}
        whileInView={{left: '0'}}
        transition={transition}
         style={{ top: "18rem", left: "0rem" }}
         className="floating-div">
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        <div
          className="blur"
          style={{ backgroundColor: "rgb(238, 210, 255)" }}
        ></div>
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
};

export default Intro;
