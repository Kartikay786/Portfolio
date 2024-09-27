import React, { useState } from 'react'
import './Stylesheets/contact.css'


function Contact() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const handleSubmit = async (e) => {
              e.preventDefault();
          
              const response = await fetch('https://portfolio-backend-i3iw.onrender.com/message', { // Ensure this is correct
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ name, email, message }),
              });

              const result = await response.json();
      if (response.ok) {
          alert("Send Successfully");

      } else {
          alert('Error: ' + result.msg);
      }
            }

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
                        <form action="" onSubmit={handleSubmit}>
                            <input type="text" placeholder='Your Name' 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            />
                            <input type="email" placeholder='Your Email' 
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             required
                            />
                            <textarea name="Message" id="" placeholder='Message'
                             value={message}
                             onChange={(e) => setMessage(e.target.value)}
                             required
                            ></textarea>
                            <input type="Submit" name='Send' />
                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact



// const RegisterForm = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       const response = await fetch('http://localhost:3000/register', { // Ensure this is correct
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ username, email, password }),
//       });
  
//       const result = await response.json();
//       if (response.ok) {
//           alert(result.msg);
//       } else {
//           alert('Error: ' + result.msg);
//       }
//   };
  
  

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Username:</label>
//                 <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//             </div>
//             <button type="submit">Register</button>
//         </form>
//     );
// };