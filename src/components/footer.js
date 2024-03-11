import Link from "next/link";

export default function Footer() {
  return (
    <footer className="shadow bg-gray-800">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="https://goweki.com"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              INTRAKO
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline me-4 md:me-6">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:underline me-4 md:me-6">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-400">
          © 2023{" "}
          <Link href="https://goweki.com" className="hover:underline">
            INTRAKO
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
