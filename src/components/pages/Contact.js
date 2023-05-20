// import React from "react";

// function Contact() {
//     return (
//         <h1>Conatct Me</h1>
//     )
// };

// export default Contact;


import React, { useState } from "react";
import axios from "axios";
import '../../styles/Contact.css'

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the form data to the server
            const response = await axios.post("/send-email", {
                name,
                email,
                message,
            });

            if (response.status === 200) {
                setSubmitted(true);
            } else {
                console.error("Failed to send email.");
            }
        } catch (error) {
            console.error("Failed to send email.", error);
        }
    };

    if (submitted) {
        return (
            <div>
                <h1>Thank you for your message!</h1>
                <p>I'll get back to you as soon as possible.</p>
                <p>You can also reach me on LinkedIn.</p>
            </div>
        );
    }

    return (
        <div className="contact-div">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-element">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-element">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-element">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Send Email</button>
            </form>
            <p>
                You can also reach me on{" "}
                <a
                    href="https://www.linkedin.com/in/mike-fazio/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                .
            </p>
        </div>
    );
}

export default Contact;
