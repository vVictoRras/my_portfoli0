import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import skill_1 from "../../images/1.jpg"
import skill_2 from "../../images/2.jpg"
import skill_3 from "../../images/3.jpg"
import skill_4 from "../../images/4.jpg"

 
const images = [
  skill_1,
  skill_2,
  skill_3,
  skill_4,
];
 
export default class LightboxExample extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
      <div>
        <button type="button" className="btn btn-primary " onClick={() => this.setState({ isOpen: true })}>
          Sertificates
        </button>
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
