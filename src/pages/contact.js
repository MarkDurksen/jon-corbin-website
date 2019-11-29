import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <h1>Bookings and Inquiries</h1>
        <form 
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input name="name" placeholder="Your Name" type="text"/>
            <input name="email" placeholder="name@example.com" type="email"/>
            <textarea name="message" />
            <button>Send</button>
        </form>
    </Layout>
)