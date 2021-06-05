import React from 'react';


function About() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About me</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / About me</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-bottom">
        <div className="container">
          <div className="col-md-12 mb-4 text-center">
            <h5 className="main-heading">My portfolio</h5>
            <div className="underline mx-auto"></div>
          </div>
          <div className="col-md-12 text-center">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;