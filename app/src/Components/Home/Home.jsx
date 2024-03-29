import React from "react";
import "./Home.css";
import img1 from "../../assets/Images/frontend.png";
import img2 from "../../assets/Images/backend.png";
import img3 from "../../assets/Images/dsa.png";
import img4 from "../../assets/Images/android.png";
import img5 from "../../assets/Images/cloud.png";
import img6 from "../../assets/Images/cyber.png";
import img7 from "../../assets/Images/ai.png";
import img8 from "../../assets/Images/ml.png";
import img9 from "../../assets/Images/graphics.png";
import Main from "../main/Main.jsx";
import Backend from "../Backend/Backend";
import Android from "../Andro/Andro";
import Cloud from "../Cloud/Cloud";
import AI from "../AI/AI";
import ML from "../ML/ML";
import CyberSecurity from "../CyberSecurity/CyberSecurity";
import Graphics from "../GRAPHICS/Graphics";
import { useState } from "react";
import DSA from "../DSA/DSA";


const Home = () => {
  const components = [
    <Main />,
    <Backend />,
    <DSA />,
    <Android />,
    <Cloud />,
    <AI />,
    <ML />,
    <CyberSecurity />,
    <Graphics />,
  ];
  const [index, setIndex] = useState(0);

  return (
    <>
      <section id="Home">
        <div className="maindiv">
          <div className="rect1">
            <h4>Front-end</h4>
            <div className="i1">
              <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(0)}>
                <img src={img1} alt="images"/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect2">
            <h4>Backend</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(1)}>
                <img src={img2} alt="images"/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect3">
            <h4>DSA</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(2)}>
                <img src={img3} alt="images"/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect4">
            <h4>Android Dev</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(3)}>
                <img src={img4} alt="images"/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect5">
            <h4>Cloud computing</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(4)}>
                <img src={img5} alt="images"/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect6">
            <h4>AI</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(5)}>
                <img src={img6} alt='images'/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect7">
            <h4>ML</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(6)}>
                <img src={img7} alt='images'/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect8">
            <h4>Cyber security</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(7)}>
                <img src={img8} alt='images'/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect9">
            <h4>Graphics design</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(8)}>
                <img src={img9} alt='images'/>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {components[index]}
    </>
  );
};

export default Home;
