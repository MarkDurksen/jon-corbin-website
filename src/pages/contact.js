import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <h1>Contact</h1>
        <p>For bookings and inquires please fill out the form below.</p>
        <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="contact" />
                <input
                    className="form-input"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                />
                <input
                    className="form-input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                />
                <textarea
                    className="form-input form-textarea"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Message"
                />
            <input type="hidden" name="bot-field"/>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
        </form>
    </Layout>
)