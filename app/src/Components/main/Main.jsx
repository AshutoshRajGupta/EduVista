
import "./Main.css";
import sampleimg from "../../assets/suggestion.png";
import sampleimg1 from "../../assets/Images/android.png";
import road_im from "../../assets/Images/road-map.png";
import fron1 from "../../assets/yt/front1.jpg";
import fron2 from "../../assets/yt/front2.jpg";
import fron3 from "../../assets/yt/front3.jpg";
import fron4 from "../../assets/yt/front4.jpg";
import fron5 from "../../assets/yt/front5.jpg";
import cfron1 from "../../assets/courses/cfron1.png";
import cfron2 from "../../assets/courses/cfron2.png";
import cfron3 from "../../assets/courses/cfron3.png";
import cfron4 from "../../assets/courses/cfron4.png";
import Lottie from "lottie-react";
import cs1 from "../../assets/lotties/coming_soon.json";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Modal from "react-modal";

import "swiper/css";
import "swiper/css/pagination";

const Main = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <section id="Main">
      <div className="maindiv_content" id="yash_div">
        <div className="offi_websites">
          <h4>Official websites</h4>

          <div className="marquee_div" id="link_con">
            <div className="all_links">
              <marquee
                id="rightContainer_ContentTable2_panel3"
                align="justify"
                direction="up"
                onmouseout="this.start()"
                height="165px"
                onmouseover="this.stop()"
                scrollamount="3"
                scrolldelay="60"
              >
                <div className="site1">
                  <p align="justify">
                    <a href="https://html.com/">HTML</a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                      target="blank"
                    >
                      HTML | MDN
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.w3schools.com/html/8" target="blank">
                      HTML | w3schools
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                      target="blank"
                    >
                      CSS | MDN
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.w3schools.com/css/" target="blank">
                      CSS | w3schools
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.geeksforgeeks.org/css/" target="blank">
                      CSS | geeks for geeks
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScrip"
                      target="blank"
                    >
                      Javascript | MDN
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.w3schools.com/js/" target="blank">
                      Javascript | w3schools
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a
                      href="https://www.geeksforgeeks.org/javascript/"
                      target="blank"
                    >
                      Javascript | geeks for geeks
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a
                      href="https://reactjs.org/tutorial/tutorial.html"
                      target="blank"
                    >
                      ReactJs
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a
                      href="https://www.w3schools.com/REACT/DEFAULT.ASP"
                      target="blank"
                    >
                      ReactJs | w3schools
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a
                      href="https://www.geeksforgeeks.org/reactjs-tutorials/"
                      target="blank"
                    >
                      ReactJs | geeks for geeks
                    </a>
                  </p>
                </div>
              </marquee>
            </div>
            <div className="modal_button">
              <button onClick={() => setModalIsOpen(true)}>Click Here</button>
              <Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                  overlay: {
                    backgroundColor: "#3c3c74",
                    zIndex: 100,
                  },
                  content: {
                    zIndex: 100,
                    backgroundColor: "#313150",
                  },
                }}
              >
                <div className="site1">
                  <p align="justify">
                    <a href="https://html.com/">HTML</a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                      target="blank"
                    >
                      HTML | MDN
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.w3schools.com/html/8" target="blank">
                      HTML | w3schools
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                      target="blank"
                    >
                      CSS | MDN
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.w3schools.com/css/" target="blank">
                      CSS | w3schools
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.geeksforgeeks.org/css/" target="blank">
                      CSS | geeks for geeks
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScrip"
                      target="blank"
                    >
                      Javascript | MDN
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.w3schools.com/js/" target="blank">
                      Javascript | w3schools
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a
                      href="https://www.geeksforgeeks.org/javascript/"
                      target="blank"
                    >
                      Javascript | geeks for geeks
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a
                      href="https://reactjs.org/tutorial/tutorial.html"
                      target="blank"
                    >
                      ReactJs
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a
                      href="https://www.w3schools.com/REACT/DEFAULT.ASP"
                      target="blank"
                    >
                      ReactJs | w3schools
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a
                      href="https://www.geeksforgeeks.org/reactjs-tutorials/"
                      target="blank"
                    >
                      ReactJs | geeks for geeks
                    </a>
                  </p>
                </div>
                <div>
                  <button
                    id="close_btn"
                    onClick={() => setModalIsOpen(false)}
                    style={{
                      backgroundColor: "red",
                      height: "30px",
                      width: "60px",
                      color: "white",
                    }}
                  >
                    Close
                  </button>
                </div>
              </Modal>
            </div>
          </div>
        </div>
        <div className="yt_videos">
          <h4>Youtube videos</h4>
          <div className="img_marquee">
            {/* <marquee
              id="rightContainer_ContentTable2_panel3"
              align="justify"
              direction="up"
              onmouseout="this.start()"
              height="200px"
              onmouseover="this.stop()"
              scrollamount="4"
              scrolldelay="5"
            >
              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/@TraversyMedia/playlists" target="blank">
                    <img className="im1" src={fron1} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/@funfunfunction/playlists" target="blank">
                    <img className="im1" src={fron2} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://youtube.com/watch?v=pmKyG3NBY_k" target="blank">
                    <img className="im1" src={fron3} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=PkZNo7MFNFg&list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V" target="blank">
                    <img className="im1" src={fron4} />
                  </a>
                </p>
              </div>


              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/@NetNinja/playlists" target="blank">
                    <img className="im1" src={fron5} />
                  </a>
                </p>
              </div>
            </marquee> */}
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <a
                  href="https://www.youtube.com/@TraversyMedia/playlists"
                  target="blank"
                >
                  <img className="im1" src={fron1} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/@funfunfunction/playlists"
                    target="blank"
                  >
                    <img className="im1" src={fron2} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://youtube.com/watch?v=pmKyG3NBY_k"
                    target="blank"
                  >
                    <img className="im1" src={fron3} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=PkZNo7MFNFg&list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V"
                    target="blank"
                  >
                    <img className="im1" src={fron4} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/@NetNinja/playlists"
                    target="blank"
                  >
                    <img className="im1" src={fron5} />
                  </a>
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="Projects">
          <h4>Projects</h4>
          <div className="suggest_con">
              <marquee
                id="rightContainer_ContentTable2_panel3"
                align="justify"
                direction="up"
                onmouseout="this.start()"
                height="200px"
                onmouseover="this.stop()"
                scrollamount="3"
                scrolldelay="60"
              ></marquee>
              <div className="texts">
                {/* <p>Suggestion</p> */}
                <a href="https://docs.google.com/document/d/1yDU28DEaAd5r-2C-07T4KXY7gs0JPV8qJ2Xvfr_g1N4/edit?usp=sharing" target="_blank"> Project Ideas</a>
              </div>
            </div>
        </div>
        <div className="Roadmap">
          <h4>Roadmap</h4>
          <div className="roadmap_con">
            <div className="road_img">
              <img src={road_im}></img>
            </div>
            <div className="button">
              <a href="https://roadmap.sh/frontend" target="_blank">
                Get the road map
              </a>
            </div>
          </div>
        </div>

        <div className="Courses">
          <h4>Courses</h4>
          <div className="course_marquee">
            {/* <marquee
              id="rightContainer_ContentTable2_panel3"
              align="justify"
              direction="down"
              onmouseout="this.start()"
              height="200px"
              onmouseover="this.stop()"
              scrollamount="4"
              scrolldelay="10"
            >
              <div className="cr1">
                <a href="https://egghead.io/courses/the-beginner-s-guide-to-react" target="blank">
                  <img className="im1" src={cfron1} />
                </a>
              </div>

              <div className="cr1">
                <a href="https://fireship.io/courses/js/" target="blank">
                  <img className="im1" src={cfron2} />
                </a>
              </div>

              <div className="cr1"> 
                <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" target="blank">
                  <img className="im1" src={cfron3} />
                </a>
              </div>

              <div className="cr1">
                <a href="https://frontendmasters.com/" target="blank">
                  <img className="im1" src={cfron4} />
                </a>
              </div>
            </marquee> */}
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <a
                  href="https://egghead.io/courses/the-beginner-s-guide-to-react"
                  target="blank"
                >
                  <img className="im1" src={cfron1} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a href="https://fireship.io/courses/js/" target="blank">
                  <img className="im1" src={cfron2} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a
                  href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
                  target="blank"
                >
                  <img className="im1" src={cfron3} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a href="https://frontendmasters.com/" target="blank">
                  <img className="im1" src={cfron4} />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="Suggestion_form">
          <h4>Suggestions form</h4>

          <div className="suggest_con">
            <marquee
              id="rightContainer_ContentTable2_panel3"
              align="justify"
              direction="up"
              onmouseout="this.start()"
              height="200px"
              onmouseover="this.stop()"
              scrollamount="3"
              scrolldelay="60"
            ></marquee>
            <div className="texts">
              
              <a href="/suggestion"> Suggestion</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
