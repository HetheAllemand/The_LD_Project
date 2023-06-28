import React from 'react'
import "./help.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Help = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_w23y1hz', 'template_qw5wl6b', form.current, 'xjhR3hWU4lv8oh8eS')
          .then((result) => {
              console.log(result.text);
            }, 
            (error) => {
              console.log(error.text);
            }
          );
          e.target.reset()

    };

    return(
    <section>
        <div className="container">
            <h2 className="--text-center">Give Us Feedback</h2>
            <form ref={form}  onSubmit={sendEmail} className="--form-control-card">
                <input type='text' placeholder='Full Name' name='user_name' required />
                <input type='email' placeholder='Email' name='user_email' required />
                <input type='text' placeholder='Subject' name='subject' required />
                <textarea name='message' cols="30" rows="10"></textarea>
                <button type="submit" classname="btn btn-dark">Send Message</button>
            </form>
        </div>
    </section>
    );
}

export default Help;