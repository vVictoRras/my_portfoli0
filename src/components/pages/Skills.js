import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns } from "react-bootstrap";
import skill_1 from "../../../src/images/1.jpg"

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
      

    <CardColumns>
      <Card>
        <Card.Img variant="top" src={skill_1}/>
        <Card.Body>
          <Card.Title>Card title </Card.Title>
          <Card.Text>
            Card Text This card has supporting text below as a natural lead-in
            to additional content.{" "}
          </Card.Text>
        </Card.Body>
       
      </Card>

      <Card>
        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Card Text his card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
       
      </Card>

      <Card>
        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Card Text his card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        </Card>
    </CardColumns>
    </div>
  )
};


export default Skills;