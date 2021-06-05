
import emailjs from "emailjs-com";
import React from 'react';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
     emailjs.sendForm('service_l5l9qip', 'template_8qjycsz', e.target, 'user_OLAbWB7nqRoK2b26KBwo7')
        .then((result) => {
            console.log(result.text);
            alert('Your mail is sent!');
        }, (error) => {
            console.log(error.text);
            alert(error.text);
        });
        e.target.reset()
    }

    return (
      <div>
            <div>
            <section className="py-4 bg-info">
                <div className="container">
                <div className="row">
                    <div className="col-md-4 my auto">
                    <h4>Contact me</h4>
                    </div>
                    <div className="col-md-8 my-auto">
                    <h6 className="float-end">Home / Contact me</h6>
                    </div>
                </div>
                </div>
            </section>
            </div>

           <div className="container">
                <div className="row"> 
                    <div className="col-md-6 mt-2"> 
                       <form onSubmit={sendEmail}>
                            <div className='mb-1'>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            />
                            </div>
                        <div className='mb-1'>
                            <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            name="email"
                            />
                        </div>
                        <div className='mb-1'>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                            />
                        </div>
                        <div className='mb-1'>
                            <textarea
                            className="form-control"
                            id=""
                            cols="30"
                            rows="8"
                            placeholder="Your message"
                            name="message"
                            ></textarea>
                        </div>
                           <div className='mb-1'>
                            <input
                            type="submit"
                            className="btn btn-info mt-1 w-100"
                            value="Send Message"
                            ></input>
                            </div>
                       </form>
                    </div>
                                        <div className='col-md-6 border-start'>
                                            <h5 className="main-heading mt-2 text-center">My adress info</h5>
                                            <div className="underline mx-auto"></div>
                                            <p className='text-center'>Moldova, Dubossary MD-4500, Kotovsky 13</p>
                                            <p className='text-center'>Phone: +373 77772750</p>
                                            <p className='text-center'>Email: sirotilov@gmail.com</p>
                                        </div>               
                                     
                               
                       
                </div>               
            </div>
      </div>
    );
}
