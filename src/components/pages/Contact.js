import React, { useState } from 'react';

import { validateEmail, validateName } from '../../utils/helpers';

    const Contact = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const [errorMessage, setErrorMessage] = useState('');
    

        const handleInputChange = (event) => {
            const { target } = event;
            const inputType = target.name;
            const inputValue = target.value;

            if (inputType === 'name') {
                setName(inputValue);
            } else if (inputType === 'email') {
                setEmail(inputValue);
            } else {
                setMessage(inputValue);
            } 

            
        };

        const handleFormSubmit = (event) => {
            event.preventDefault();

            if (!validateName(name) || !name) {
                setErrorMessage('Please enter a valid name');
                return;
            }
            if (!validateEmail(email) || !email) {
                setErrorMessage('Please enter a valid email address');
                return;
            }
            if (!message) {
                setErrorMessage('Please enter a message');
                return;
            }
            setName('');
            setEmail('');
            setMessage('');
            setErrorMessage('');

        };
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h2 className='page-titles'>Contact</h2>
                <form className="contact-form row g-3">
                    <div class="col-12">
                        <label for="inputName" class="form-label">Name</label>
                        <input 
                        value={name} 
                        name='name' 
                        class="form-control" 
                        placeholder="Name..." 
                        onChange={handleInputChange}
                        />
                    </div>
                    <div class="col-12">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input 
                        value={email} 
                        name='email'
                        class="form-control" 
                        onChange={handleInputChange}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea 
                        class="contact-message form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3" 
                        name='message'
                        value={message}
                        onChange={handleInputChange}
                        />
                    </div>
                    <button onClick={handleFormSubmit}type="button" class="btn btn-primary btn-lg" style={{width: '20%'}}>Submit</button>
                </form>
                
                <div>
                    <p className='error'>{errorMessage}</p>
                </div>
                
            </div>
        );
    }

export default Contact;
