import React from 'react'
import './Stylesheets/contact.css'


function Contact() {
    return (
        <>
            <div className="blank"></div>
            <div className="contactpage">
                <div className="tittle">
                    <h2>Contact Me</h2>
                </div>
                <div className="contactcontainer" >
                    <div className="textbox" id='detbox'>

                        <div className="text">
                            <h2 className='heading'>Name</h2>
                            <h2>Kumar Kartikay</h2>
                        </div>
                        <div className="text">
                            <h2 className='heading'>Address</h2>
                            <h2>Uttar Pradesh, India</h2>
                        </div>
                        <div className="text">
                            <h2 className='heading'>Email</h2>
                            <h2>kg578045@gmail.com</h2>
                        </div>

                    </div>
                    <div className="textbox" id='formbox'>

                        <h2>Message me</h2>
                        <form action="">
                            <input type="text" placeholder='Your Name' />
                            <input type="email" placeholder='Your Email' />
                            <textarea name="Message" id="" placeholder='Message'></textarea>
                            <input type="Submit" name='Send' />
                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact