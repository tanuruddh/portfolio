import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div className="para">
                    <h1>Contact Us</h1>
                    <p>Need to get in touch with us? Either fill out the form with your inquiry or
                        find the department email you'd like to contact below.</p>
                </div>
                <div className="form" >
                    <form action='submit' method='post'>
                        <label htmlFor="userName">UserName:</label>
                        <input type="text" id='userName' name='username' />
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='email' />
                        <label htmlFor="msg">What can I help you?</label>
                        <textarea id='msg' name="w3review"
                            rows="4" cols="50" />

                        <input type="submit" value={"Submit"} className='btn' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
