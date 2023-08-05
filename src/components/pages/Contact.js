import React, { useState }from 'react';


    const Contact = () => {
    
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h2 className='page-titles'>Contact</h2>
                <form className="contact-form row g-3">
                    <div class="col-12">
                        <label for="inputName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Name..."></input>
                    </div>
                    <div class="col-12">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="contact-message form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    
                </form>
            </div>
        );
    }

export default Contact;
