import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LightboxExample from "./Popup";
import Card from "react-bootstrap/Card";
import js from "../../images/js.png";
import react from "../../images/react.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import github from "../../images/github.png";

const Skills = () => {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my auto">
              <h4>My Skills</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / My skills</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-bottom">
        <div className="container">
          <div className="col-md-12 mb-4 text-center">
            <h5 className="main-heading">My skills</h5>
            <div className="underline mx-auto"></div>
          </div>
          {/* <div className="col-md-12 text-center"></div> */}
        </div>
      </section>

      <section className="section border-bottom">
        <div className="container">
          <div className="row">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={js} />
                <Card.Body>
                  <Card.Title>JavaScript</Card.Title>
                  <Card.Text>
                    Learn JS near 6 months in Skill UP school in Ukraine
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>

              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={react} />
                <Card.Body>
                  <Card.Title>React Js</Card.Title>
                  <Card.Text>
                    Learn React JS near 2 months in Skill UP school in Ukraine
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>

              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={html} />
                <Card.Body>
                  <Card.Title>HTML</Card.Title>
                  <Card.Text>Learn HTML from different courses</Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>

              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={css} />
                <Card.Body>
                  <Card.Title>CSS</Card.Title>
                  <Card.Text>Learn HTML from different courses</Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>

              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={github} />
                <Card.Body>
                  <Card.Title>Github</Card.Title>
                  <Card.Text>Basic knowlege from course</Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
          </div>
      </section>

      <section>
        <div className="container">
          <div className="col-md-12 mb-4 text-center">
            <p><h2>IT - is my hobby...</h2></p>
            <LightboxExample />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
