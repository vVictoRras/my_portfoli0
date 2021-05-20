
import emailjs from "emailjs-com";
import React from 'react';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();
        // emailjs.send('service_l5l9qip','template_8qjycsz', contact, 'user_OLAbWB7nqRoK2b26KBwo7')

    emailjs.sendForm('gmail', 'template_8qjycsz', e.target, 'user_OLAbWB7nqRoK2b26KBwo7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
//     <div>
//       <section className="py-4 bg-info">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4 my auto">
//               <h4>Contact me</h4>
//             </div>
//             <div className="col-md-8 my-auto">
//               <h6 className="float-end">Home / Contact me</h6>
//             </div>
//           </div>
//         </div>
//       </section>

//      
//               </div>
//              
//            <div className='col-md-6 border-start'>
//              <h5 className='main-heading'>My adress info</h5>
//              <div className='underline'></div>
//              <p>
//                 Moldova, Dubossary MD-4500, Kotovsky 13
//              </p>
//              <p>
//                Phone: +373 77772750
//                </p>
//                <p>
//                Email: sirotilov@gmail.com
//                </p>

//           </div>
//          

       
        