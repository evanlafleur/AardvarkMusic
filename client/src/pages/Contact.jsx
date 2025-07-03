import React from 'react';

const Contact = () => (
  <section className="p-6">
    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
    <form className="grid gap-4 max-w-md">
      <input type="text" placeholder="Your Name" className="p-2 border rounded" />
      <input type="email" placeholder="Your Email" className="p-2 border rounded" />
      <textarea placeholder="Your Message" className="p-2 border rounded"></textarea>
      <button type="submit" className="bg-[#EB5E28] text-white px-4 py-2 rounded">Send</button>
    </form>
  </section>
);

export default Contact;