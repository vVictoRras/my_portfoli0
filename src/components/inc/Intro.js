import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import {Link} from 'react-router-dom';
import "../../../src/App.css"

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4 text-light">Hello, I'm Victor</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider text-light">
                  <Typed
                    strings={[
                      "JavaScript and React student",
                      "QA intern",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
                 <a
                  className="btn btn-primary btn js-scroll px-3"
                  href="#work"
                  role="button"
                >
                  Download my CV
                </a>
               
            </div>
          </div>
        </div>
       
              <div className="readMore">
              <Link to="/about" className="btn btn-primary btn mt-10 js-scroll px-4">
                {" "}
                Read more
              </Link>
              </div>
      </div>
      
    );
  }
}

export default Intro;