// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer>
//       <div className="w-full max-w-screen-2xl mx-auto p-4 md:py-8 bg-gray-800">
//         <div className="sm:flex sm:items-center sm:justify-between">
//           <Link
//             href="https://goweki.com"
//             className="flex items-center mb-4 sm:mb-0 space-x-3"
//           >
//             <span className="sm:ml-2 self-center text-2xl font-semibold whitespace-nowrap text-white">
//               INTRAKO
//             </span>
//           </Link>
//           <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
//             <li>
//               <Link href="/#about" className="hover:underline me-4 md:me-6">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link href="/#services" className="hover:underline me-4 md:me-6">
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link href="/contacts" className="hover:underline me-4 md:me-6">
//                 Contacts
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
//         <span className="block text-sm sm:text-center text-gray-400">
//           © 2023{" "}
//           <Link href="https://goweki.com" className="hover:underline">
//             INTRAKO
//           </Link>
//           . All Rights Reserved.
//         </span>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="pb-12 pt-6 md:py-12 bg-sky-800/30 border-t-2 border-gray-500/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  href="/"
                  className="flex justify-center items-center text-sky-400 bg-gray-800 hover:text-gray-100 hover:bg-sky-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-sky-400 bg-gray-800 hover:text-gray-100 hover:bg-sky-600 rounded-full transition duration-150 ease-in-out"
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
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-sky-400 bg-gray-800 hover:text-gray-100 hover:bg-sky-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-sky-400 bg-gray-800 hover:text-gray-100 hover:bg-sky-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Linkedin"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">
              &copy; Intrako. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
