import Link from "next/link";
import PageTitle from "@/components/pageTitle";

export default function ContactsPage() {
  return (
    <main className="grow">
      <PageTitle pageName="Contacts" />
      <section id="contacts">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-10">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-4">
              <h2 className="h4">
                We are social; leave us a message and we will gladly look into your communication
              </h2>
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
                <form name="contact" data-aos="fade-left">
                  <div>
                    <label className="block text-base tracking-tight text-gray-600">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      required
                      className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                    />
                  </div>
                  <div className="mt-6">
                    <label className="block text-base tracking-tight text-gray-600">
                      Email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                    />
                  </div>
                  <div className="mt-6">
                    <label className="block text-base tracking-tight text-gray-600">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Your message"
                      required
                      className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                    ></textarea>
                  </div>
                  <button className="inline-block bg-orange-400 hover:bg-orange-600 rounded text-black text-sm font-semibold tracking-widest font-heading px-8 py-4 mt-6">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}

