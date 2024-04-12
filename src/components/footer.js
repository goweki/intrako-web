"use client";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Footer() {
  //STATES - email
  const [email, setEmail] = useState("");
  //FUNC - handleSubscribe
  function handleSubscribe(e) {
    e.preventDefault();
    if (!email) {
      toast(`Please provide either an email or Tel. No.`);
      return;
    }
    // fetch options
    let fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: `NEWSLETTER SUBSCRIPTION REQUEST (via website)`,
        text: `Email: ${email}`,
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
          toast.success("Request submitted!");
          setEmail("");
          console.log("HERE");
        } else if (json_.error) {
          console.error(
            "ERROR: failed sending message-contact1\n > " +
              JSON.stringify(json_) +
              "\n.............."
          );
          toast.error("Subscription request failed");
        } else {
          console.error(
            "ERROR: failed sending email subscription request\n > " +
              JSON.stringify(json_) +
              "\n.............."
          );
          toast.error("No Response");
        }
      })
      .catch((err) => {
        toast.error("ERROR: failed to send newspaper subscription request");
        console.error("ERROR: caught error -footer\n > " + err.error || err);
      });
  }
  //RETURN
  return (
    <footer
      className="border-gray-500/50 border-y-2 bg-gray-800 transition-all"
      id="footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}

        <div className="grid sm:grid-cols-6 gap-8 py-8 md:py-12">
          {/* Quick links block */}
          <div className="sm:col-span-6 md:col-span-3 ">
            <h6 className="text-gray-300 border-gray-400 text-xs font-medium mb-2 inline-block border-b-2">
              QUICK LINKS
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  href="/"
                  className="text-gray-400 hover:text-purple-200 transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/aboutUs"
                  className="text-gray-400 hover:text-purple-200 transition duration-150 ease-in-out"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-purple-200 transition duration-150 ease-in-out"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/contacts"
                  className="text-gray-400 hover:text-purple-200 transition duration-150 ease-in-out"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Request demo block */}
          <div className="sm:col-span-6 md:col-span-3">
            <h6 className="text-gray-400 font-medium mb-2">
              Subscribe to our Newsletter
            </h6>
            <p className="text-sm text-gray-400 mb-4">
              Leave your email with us to get monthly nuggets of business
              knowledge
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="grid grid-cols-4 space-x-2 ">
                <div className="col-span-3">
                  <input
                    type="email"
                    className="w-full appearance-none bg-gray-400 border border-secondary focus:border-purple-300 rounded-sm px-4 py-2 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-600 placeholder:italic"
                    placeholder="Enter your email..."
                    aria-label="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="col-span-1">
                  <button
                    type="submit"
                    className="rounded-lg w-full h-full bg-secondary disabled:opacity-25"
                    disabled={!email}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 m-auto text-black"
                    >
                      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-500/50">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            {/* facebook */}
            <li className="ml-4">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/people/Intrako-Marketing/61558258865025/"
                className="flex justify-center items-center text-gray-200 hover:text-gray-800 hover:bg-secondary rounded-full shadow transition-all duration-150 ease-in-out"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 m-2 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
            </li>
            {/* instagram */}
            <li className="ml-4">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/intrakoagency/"
                className="flex justify-center items-center text-gray-200 hover:text-gray-800 hover:bg-secondary rounded-full shadow transition-all duration-150 ease-in-out"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 m-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </li>
            {/* linkedin */}
            <li className="ml-4">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/intrako-marketing-agency/about/?viewAsMember=true"
                className="flex justify-center items-center text-gray-200 hover:text-gray-800 hover:bg-secondary rounded-full shadow transition-all duration-150 ease-in-out"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 m-2 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>
            </li>
            {/* Twitter */}
            <li className="ml-4">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/IntrakoAgency"
                className="flex justify-center items-center text-gray-200 hover:text-gray-800 hover:bg-secondary rounded-full shadow transition-all duration-150 ease-in-out"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 m-2 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-400 mr-4">
            <Link className="text-purple-300 hover:underline" href="/">
              Intrako
            </Link>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
