"use client";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // onSubmit
  function handleSubmit(e) {
    e.preventDefault();
    // confirm fields filled
    if (!name) {
      toast(`Please provide either a name`);
      return;
    }
    if (!email) {
      toast(`Please provide either an email`);
      return;
    }
    if (!message) {
      toast(`Please provide a message.`);
      return;
    }
    // fetch options
    let fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: `LEAD VIA WEBSITE`,
        text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
      }),
    };
    // POST request using fetch
    fetch("/api/mailer", fetchOptions)
      .then((res_) => {
        if (res_.status === 200) return res_.json();
        else throw new Error(`HTTP error ${res_.status}`);
      })
      .then((json_) => {
        if (json_.success) {
          console.log(
            "SUCCESS: message sent\n > " +
              JSON.stringify(json_) +
              "\n.............."
          );
          toast.success("Message submitted!");
          setName("");
          setEmail("");
          setMessage("");
        } else if (json_.error) {
          console.error(
            "ERROR: failed sending message-contact1\n > " +
              JSON.stringify(json_) +
              "\n.............."
          );
          toast.error(json_.error);
        } else {
          console.error(
            "ERROR: failed sending message-contact2\n > " +
              JSON.stringify(json_) +
              "\n.............."
          );
          toast.error("No Response");
        }
      })
      .catch((err) => {
        toast.error("ERROR: failed to send contact message");
        console.error(
          "ERROR: caught error -contact page\n > " + err.error || err
        );
      });
  }
  return (
    <section id="contactUs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-10">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4">
            <h2 className="h4">We are social. Reach out to us...</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <div className="flex items-center my-2">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <Link
                  href="tel:{{ contact.tel }}"
                  className="hover:text-orange-300"
                >
                  Tel: (+254) 722 000 000
                </Link>
              </div>

              <div className="flex items-center my-2">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <Link
                  href="mailto:business@intrako.co.ke"
                  className="hover:text-orange-300"
                >
                  Email: business@intrako.co.ke
                </Link>
              </div>

              <div className="flex items-center my-2">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {`Open: Mon-Fri (9am-5pm)`}
              </div>

              <div className="flex items-center my-2">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <Link
                  href="https://maps.app.goo.gl/Dpn5p7CvMsbJ9QxY9"
                  target="_blank"
                  className="hover:text-orange-300"
                >
                  Muthangari Drive, Lavington, Nairobi-KE
                </Link>
              </div>
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                name="contact"
                data-aos="fade-left"
                className="py-3 md:py-6"
              >
                <div>
                  <label className="block text-base tracking-tight text-gray-600">
                    Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-2 w-full border-none text-sm p-4 bg-primary/20 placeholder:italic placeholder-gray-500"
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-base tracking-tight text-gray-600">
                    Email address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-2 w-full border-none text-sm p-4 bg-primary/20 placeholder:italic placeholder-gray-500"
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-base tracking-tight text-gray-600">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="mt-2 w-full border-none text-sm p-4 bg-primary/20 placeholder:italic placeholder-gray-500"
                  ></textarea>
                </div>
                <button className="inline-block bg-secondary hover:bg-orange-500 rounded text-black text-sm font-semibold tracking-widest font-heading px-8 py-4 mt-6">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
