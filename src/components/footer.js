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
                    className="w-full appearance-none bg-gray-400 border border-secondary focus:border-purple-300 rounded-sm px-4 py-2 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-600 placeholder:italic"
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
            <li>
              <Link
                href="https://www.twitter.com/goweki_"
                className="flex justify-center items-center text-gray-200 hover:bg-sky-800 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                href="https://www.github.com/goweki"
                className="flex justify-center items-center text-gray-200 hover:bg-sky-800 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Github"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                href="https://www.facebook.com/goweki"
                className="flex justify-center items-center text-gray-200 hover:bg-sky-800 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Facebook"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-400 mr-4">
            <Link
              className="text-sky-300 hover:underline"
              href="https://goweki.com/"
            >
              Intrako
            </Link>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
