import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <h1>Bookings and Inquiries</h1>
        <form 
            name="contact-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input name="name" placeholder="Your Name" type="text"/>
            <input name="email" placeholder="email@example.com" type="text"/>
            <textarea name="message" id="" cols="30" rows="10" />
            <button>Send</button>
        </form>
    </Layout>
)