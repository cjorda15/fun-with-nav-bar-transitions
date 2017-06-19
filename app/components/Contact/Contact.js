import React from 'react'
import './Contact.css'

const Contact = () => {
  return(
    <div className="contact-container" id="contact-container">
     <div className="contact-top-bar">
      Contact
     </div>
     <div className ="contact-info-container">
      <div className="contact-info">
       <h6>ADDRESS</h6>
       <div>
        <div className="contact-logo address-logo"></div>
        </div>
        <section>
        <p><span>Kilroy Group Contacting</span></p>
         <p>149 Yuma Street</p>
         <p>Denver CO 80237</p>
        </section>
        <section>
        <p><span>Northern Division Office</span></p>
         <p>9960 Pennsyvania Dr</p>
         <p>Windsor CO 80550</p>
        </section>
      </div>
       <div className="contact-info">
       <h6>PHONE</h6>
        <div className="contact-logo phone-logo"></div>
        <section>
        <p><span>Customer Service</span></p>
         <p>303-999-9999 - phone</p>
         <p>303-999-9998 - fax</p>
        </section>
        <section>
        <p><span>The Other Side</span></p>
         <p>999-333-3333 - phone</p>
         <p>999-333-3332 - fax</p>
        </section>
      </div>
      <div className="contact-info">
      <h6>EMAIL</h6>
       <div className="contact-logo email-logo"></div>
       <section>
       <p><span>Request for Proposal</span></p>
         <p>Info@bleeBlahBloop.com</p>
       </section>
       <section>
       <p><span>Electrical Services></span></p>
         <p>Services@bleeBlahBloop.com</p>
       </section>
       <section>
       <p><span>Dangerous Services</span></p>
         <p>PleaseDont@bleeBlahBloop.com</p>
       </section>
      </div>
    </div>
    </div>
  )
}

export default Contact
