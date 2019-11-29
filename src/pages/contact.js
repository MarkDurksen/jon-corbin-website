import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <h1>Bookings and Inquiries</h1>
        <form 
            name="contact-form-1"
            method="post"
            action="/thank-you"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
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
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
        </form>
    </Layout>
)