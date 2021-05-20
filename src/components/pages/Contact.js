// import React from 'react';
// import emailjs from 'emailjs-com';


// function Contact() {
  
//   return (
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

//       <section className='section'>
//       <div className="container">
//       <div className="card shadow">
//         <div className="card-body">
//          <div className='row'>
//            <div className='col-md-6'>
//               <h6>Contact form</h6>
//               <hr/>
//               <div className='form-group'>
//                 <label className='mb-1'>Full Name</label>
//                 <input type='text' placeholder='Input full name' className='form-control'/>
//               </div>
//               <div className='form-group'>
//                 <label className='mb-1'>Phone</label>
//                 <input type='text' placeholder='Input phone number' className='form-control'/>
//               </div>
//               <div className='form-group'>
//                 <label className='mb-1'>Email</label>
//                 <input type='text' placeholder='Input email' className='form-control'/>
//               </div>
//               <div className='form-group'>
//                 <label className='mb-1'>Message </label>
//                 <textarea rows='3' className='form-control' placeholder='Type your message...'></textarea>
//               </div>
//               <div className='form-group py-3'>
//                 <button type='button' className='btn btn-primary shadow w-100'>Send message</button>
//   </div>
//            </div>

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
//          </div>
//         </div>
//       </div>
//     </div>
//       </section>
//     </div>
//   );
// }

// export default Contact;

import React, {useState} from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
   const frmContact = { userEmail:'', concernCategory:'', emailTitle:'', emailDetails:'' };
   const [contact,setContact] = useState(frmContact);
   const [showMessage, setShowMessage] = useState(false);
   const handleChange = e => { 
        const {name,value} = e.target;
        setContact({...contact,[name]:value}); 
   };
   const handleSubmit = e =>{
        e.preventDefault();
        emailjs.send('service_l5l9qip','template_8qjycsz', contact, 'user_OLAbWB7nqRoK2b26KBwo7')
        .then((response) => {
                   console.log('SUCCESS!', response.status, response.text);
                   setContact(frmContact);
                   setShowMessage(true);
        }, (err) => {
                   console.log('FAILED...', err);
        });
   }
  return (
    <div className="container pt-2 text-center">
        <div className="alert alert-light" role="alert">
          <a href="https://tupaginaonline.net/tutorial-para-enviar-correo-con-react-js-hooks-y-emailjs">Tutorial para enviar correo con React.js (Hooks) y emailJS</a>
        </div>
        { showMessage ? <div className="alert alert-success col-md-5 mx-auto" role="alert">Email Send Success!!</div> : ``}
        <form onSubmit={handleSubmit}>
              <div className="pt-3"><h3 className="font-weight-bold"> Contact Us !! </h3></div>
              <div className="pt-3 col-md-5 mx-auto">
                    <div className="form-group text-left"> <b>Your Email</b> <br/>
                        <input required type="text" value={contact.userEmail} name="userEmail" onChange={handleChange} className="form-control" placeholder="Your email" />
                    </div>
              </div>
              <div className="pt-3 col-md-5 mx-auto">
                    <div className="form-group text-left"> <b>Concern Category</b> <br/>
                        <select  required className="form-control" value={contact.concernCategory} onChange={handleChange} name="concernCategory">
                            <option value='' >Select</option>
                            <option value="info" >Info</option>
                            <option value="buy">Buy</option>
                            <option value="play tennis">Play tennis</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
              </div>
              <div className="pt-3 col-md-5 mx-auto">
                    <div className="form-group text-left"> <b>Title</b> <br/>
                        <input value={contact.emailTitle} required type="text" name="emailTitle" onChange={handleChange}  className="form-control" placeholder="Your email" />
                    </div>
              </div>
              <div className="pt-3 col-md-5 mx-auto">
                    <div className="form-group text-left"> <b>Describe your concerns</b> <br/>
                        <textarea required name="emailDetails" onChange={handleChange} className="form-control" placeholder="Describe your concerns" value={contact.emailDetails}></textarea>
                    </div>
              </div>
              <div className="pt-3 col-md-5 mx-auto text-left">
                    <button className="btn btn-primary">Submit</button>
              </div>
        </form>
        <div className="pt-5 font-weight-bold">tupaginaonline.net</div>     
    </div>
  );
}
export default Contact;
