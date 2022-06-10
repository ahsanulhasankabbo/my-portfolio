import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import {  toast } from 'react-toastify';


const Contact = () => {
    const form = useRef();
    const handleFormSubmit = event => {
        event.preventDefault();
        emailjs.sendForm('service_35hrkbo', 'template_c9skl2h', form.current, 'RsuoC4pmjM-vBiEW3')
      .then((result) => {
          if(result.text === 'OK'){
            toast.success('Send message to Email')
          }
      }, (error) => {
          console.log(error.text);
      });
      event.target.reset();
    }
    return (
        <div id='contact'>
            <div class="hero min-h-screen text-white">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <form ref={form} onSubmit={handleFormSubmit} class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" class="input input-bordered bg-slate-800" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your Email" class="input input-bordered bg-slate-800" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Comment</span>
                                </label>
                                <textarea type="text" name='message' placeholder="Your Message" class="input input-bordered bg-slate-800" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary text-white">Send Message</button>
                            </div>
                        </div>
                    </form>
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Get in Touch!</h1>
                        <p class="py-6">Send me an email if you think I can help you out with any of your web related projects.</p>
                    </div>
                </div>
                {/* <div className='social-image'>
                    <img src={github} alt="" />
                    <img src={linkedIn} alt="" />
                    <img src={facebook} alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default Contact;