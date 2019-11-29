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
            <label>
                Name
                <input type="text" name="name" id="name" />
            </label>
            <label>
                Email
                <input type="email" name="email" id="email" />
            </label>
            <label>
                Message
                <textarea name="message" id="message" rows="5" />
            </label>
            <input type="hidden" name="bot-field"/>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
        </form>
    </Layout>
)