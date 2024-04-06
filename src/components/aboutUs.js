import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section id="aboutUs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Mission & Vision */}
        <div className="py-8 md:py-10">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h4 mb-4">
              We are an agency with experienced marketing and business talents, that leverage best industry practices
              to curate and execute targeted marketing and business strategies. Our operations are grounded on meticulous research, strategic
              thinking, and the innovative application of knowledge.
            </h2>
            <h3 className="text-xl text-gray-400">
              At the core of our services are the users and clients we serve in addition to the values that guide us:
            </h3>
          </div>

          {/* Mission & Vision */}
          <div
            className="p-2 max-w-sm mx-auto grid gap-8 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div data-aos="zoom-in" className="mx-auto flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl border-gray-700 bg-gray-800 hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/service-03.jpg" alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400">MISSION</h5>
                <p className="max-w-60 mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">This is the mission statement for intrako</p>
              </div>
            </div>
            {/* 2nd item */}
            <div data-aos="zoom-in" className="mx-auto flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl border-gray-700 bg-gray-800 hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/service-03.jpg" alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400">VISION</h5>
                <p className="max-w-60 mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">This is the vision for intrako marketing Agency</p>
              </div>
            </div>

          </div>

        </div>
        {/* Core values */}
        <div className="border-t-2 border-gray-700 pb-8 md:pb-10 pt-16 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h4 mb-4">
              Core values
            </h2>
            <p className="text-xl text-gray-400">
              At the core of our services are the values that guide us:
            </p>
          </div>

          {/* Mission & Vision */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-sky-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  className="stroke-current text-sky-100"
                  d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-sky-300"
                  d="M43 42h-9M43 37h-9"
                  strokeLinecap="square"
                  strokeWidth="2"
                />
              </svg>
              <h4 className="h4 mb-2">Results driven</h4>
              <p className="text-lg text-gray-400 text-center">
                Our goal is to deliver high quality products at the optimal cost
                in order to surpuss the client&apos;s expectations
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="fill-current text-sky-600"
                  cx="32"
                  cy="32"
                  r="32"
                />
                <path
                  className="stroke-current text-sky-100"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 23h22v18H21z"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-sky-300"
                  d="M26 28h12M26 32h12M26 36h5"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
              <h4 className="h4 mb-2">Integrity</h4>
              <p className="text-lg text-gray-400 text-center">
                We believe transparency and deligent work leads to great working
                relationships
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-sky-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(21 21)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <ellipse
                    className="stroke-current text-sky-300"
                    cx="11"
                    cy="11"
                    rx="5.5"
                    ry="11"
                  />
                  <path
                    className="stroke-current text-sky-100"
                    d="M11 0v22M0 11h22"
                  />
                  <circle
                    className="stroke-current text-sky-100"
                    cx="11"
                    cy="11"
                    r="11"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">Collaboration</h4>
              <p className="text-lg text-gray-400 text-center">
                As always, great things happen when we come together to solve
                challenges while exploring fresh frontiers
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-sky-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(22 21)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-sky-100"
                    d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5"
                  />
                  <circle
                    className="stroke-current text-sky-300"
                    cx="13"
                    cy="9"
                    r="3"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">Innovation</h4>
              <p className="text-lg text-gray-400 text-center">
                At the core of our services is a relentless pursuit of new ideas
                coupled with creativity
              </p>
            </div>

            {/* 5th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-sky-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-sky-100"
                    d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6"
                  />
                  <path
                    className="stroke-current text-sky-300"
                    d="M22 30h4v12h-4z"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">Work-life balance</h4>
              <p className="text-lg text-gray-400 text-center">
                We believe in work being a means of improving the quality of
                life and strive to find harmony between the two
              </p>
            </div>

            {/* 6th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-sky-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(21 22)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-sky-300"
                    d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"
                  />
                  <circle
                    className="stroke-current text-sky-300"
                    cx="17"
                    cy="5"
                    r="3"
                  />
                  <path
                    className="stroke-current text-sky-100"
                    d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">Client Centricity</h4>
              <p className="text-lg text-gray-400 text-center">
                At the core of our operations are clients and we love to get
                feedback to better serve them
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BriefAboutUs() {
  return (
    <div className="p-6 w-full" id="brief-aboutUs">
      <div className="max-w-6xl m-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 pt-0"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="about-img rounded-xl overflow-hidden">
              <img className="img-fluid" src="images/professionals.jpeg" />
            </div>
          </div>
        </div>
        <div className="m-3 md:m-6"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="my-auto flex flex-col space-y-4">
            <div>
              <div className="border-2 text-sm rounded-full inline py-2 px-4">
                About Us
              </div>
            </div>
            <h2 className="h2 mb-4">
              We help businesses manage and scale products
            </h2>
            <p className="mb-4">
              XPERIENTIAL marketing takes center stage as our main service,
              offering a unique and immersive approach to connect brands with
              their audiences. We believe there is a growing need for brands to
              move beyond conventional advertising methods and embrace more
              interactive and memorable approaches.
            </p>
            <p className="mb-4">We specialize in:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2">
              <li className="flex items-center mb-2">
                <svg
                  className="w-3 h-3 fill-current text-sky-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Marketing</span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-3 h-3 fill-current text-sky-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Branding</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-sky-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Project management</span>
              </li>
            </ul>
            <div className="flex flex-row justify-start mt-4">
              <Link
                className="text-center py-2 px-4 bg-transparent border-2 border-orange-400 hover:bg-orange-500 hover:text-black rounded me-6 transition-all"
                href="/aboutUs"
              >
                Read More
              </Link>
              {/* <Link
                className="group flex h-10 w-10 p-2 items-center justify-center border-2 border-sky-500 hover:border-transparent hover:bg-sky-600 rounded-full transition-all me-3"
                href="https://fb.com/goweki"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current text-sky-400 group-hover:text-white"
                >
                  <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z" />
                </svg>
              </Link>
              <Link
                className="group flex h-10 w-10 p-2 items-center justify-center border-2 border-sky-500 hover:border-transparent hover:bg-sky-600 rounded-full transition-all me-3"
                href="https://www.linkedin.com/in/goweki"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current text-sky-400 group-hover:text-white"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />{" "}
                </svg>
              </Link>
              <Link
                className="group flex h-10 w-10 p-2 items-center justify-center border-2 border-sky-500 hover:border-transparent hover:bg-sky-600 rounded-full transition-all"
                href="https://twitter.com/goweki_"
              >
                <svg
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 462.799"
                  className="h-4 w-4 fill-current text-sky-400 group-hover:text-white"
                >
                  <path
                    fillRule="nonzero"
                    d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                  />
                </svg>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
