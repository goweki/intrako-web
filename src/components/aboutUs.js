"use client";
import Link from "next/link";
import { useEffect } from "react";
import { CardCoreValues, CardMission } from "./cards";

export default function AboutUs() {
  return (
    <section id="aboutUs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-10">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h4 mb-4">
              We are an agency with experienced marketing and business talents,
              that leverage best industry practices to curate and execute
              targeted marketing and business strategies. Our operations are
              grounded on meticulous research, strategic thinking, and the
              innovative application of knowledge.
            </h2>
            <h3 className="text-xl text-gray-600">
              At the core of our services are the users and clients we serve in
              addition to the values that guide us:
            </h3>
          </div>
          {/* Mission & Vision */}
          <div
            className="p-2 max-w-sm mx-auto grid gap-8 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <CardMission
              title="MISSION"
              content="This is the mission statement for intrako"
              image="/images/service-03.jpg"
            />
            {/* 2nd item */}
            <CardMission
              title="VISION"
              content="This is the vision of Intrako"
              image="/images/service-03.jpg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-6 py-16 md:pb-10">
        {/* Core values */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h4 mb-4">Core values</h2>
          <p className="text-xl text-gray-600">
            At the core of our services are the values that guide us:
          </p>
        </div>

        {/* Cards - core values */}
        <div
          className="max-w-sm md:max-w-2xl lg:max-w-none mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start "
          data-aos-id-blocks
        >
          {/* 1st value */}
          <CardCoreValues
            title="Results driven"
            content="Our goal is to deliver high quality products at the optimal cost in order to surpuss the client's expectations"
          >
            <svg
              className="w-16 h-16 mb-4"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect className="fill-current" width="64" height="64" rx="32" />
              <path
                className="stroke-current stroke-2 fill-none text-purple-100"
                d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                strokeLinecap="square"
                fillRule="evenodd"
              />
              <path
                className="stroke-current stroke-2 text-purple-400"
                d="M43 42h-9M43 37h-9"
                strokeLinecap="square"
              />
            </svg>
          </CardCoreValues>

          {/* 2nd value */}
          <CardCoreValues
            title="Integrity"
            content="We believe transparency and deligent work leads to great working relationships"
          >
            <svg
              className="w-16 h-16 mb-4"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle className="fill-current" cx="32" cy="32" r="32" />
              <path
                className="stroke-current text-purple-100"
                strokeWidth="2"
                strokeLinecap="square"
                d="M21 23h22v18H21z"
                fill="none"
                fillRule="evenodd"
              />
              <path
                className="stroke-current text-purple-400"
                d="M26 28h12M26 32h12M26 36h5"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </CardCoreValues>

          {/* 3rd item */}
          <CardCoreValues
            title="Collaboration"
            content="As always, great things happen when we come together to solve challenges while exploring fresh frontiers"
          >
            <svg
              className="w-16 h-16 mb-4"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect className="fill-current" width="64" height="64" rx="32" />
              <g
                transform="translate(21 21)"
                strokeLinecap="square"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              >
                <ellipse
                  className="stroke-current text-purple-400"
                  cx="11"
                  cy="11"
                  rx="5.5"
                  ry="11"
                />
                <path
                  className="stroke-current text-purple-100"
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
          </CardCoreValues>

          {/* 4th item */}
          <CardCoreValues
            title="Innovation"
            content="At the core of our services is a relentless pursuit of new ideas coupled with creativity"
          >
            <svg
              className="w-16 h-16 mb-4"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect className="fill-current" width="64" height="64" rx="32" />
              <g
                transform="translate(22 21)"
                strokeLinecap="square"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              >
                <path
                  className="stroke-current text-purple-100"
                  d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5"
                />
                <circle
                  className="stroke-current text-purple-400"
                  cx="13"
                  cy="9"
                  r="3"
                />
              </g>
            </svg>
          </CardCoreValues>

          {/* 5th item */}
          <CardCoreValues
            title="Work-life balance"
            content="We believe in work being a means of improving the quality of life and strive to find harmony between the two"
          >
            <svg
              className="w-16 h-16 mb-4"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect className="fill-current" width="64" height="64" rx="32" />
              <g
                strokeLinecap="square"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              >
                <path
                  className="stroke-current text-purple-100"
                  d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6"
                />
                <path
                  className="stroke-current text-purple-400"
                  d="M22 30h4v12h-4z"
                />
              </g>
            </svg>
          </CardCoreValues>

          {/* 6th item */}
          <CardCoreValues
            title="Client Centricity"
            content="At the core of our operations are clients and we love to get feedback to better serve them"
          >
            <svg
              className="w-16 h-16 mb-4"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect className="fill-current" width="64" height="64" rx="32" />
              <g
                transform="translate(21 22)"
                strokeLinecap="square"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              >
                <path
                  className="stroke-current text-purple-400"
                  d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"
                />
                <circle
                  className="stroke-current text-purple-400"
                  cx="17"
                  cy="5"
                  r="3"
                />
                <path
                  className="stroke-current text-purple-100"
                  d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"
                />
              </g>
            </svg>
          </CardCoreValues>
        </div>
      </div>
    </section>
  );
}

export function BriefAboutUs() {
  return (
    <section className="px-6 pt-24 pb-16 w-full" id="brief-aboutUs">
      <div className="max-w-6xl m-auto grid grid-cols-1">
        <div data-aos="fade-down" data-aos-delay="200" className="mx-auto">
          <div className="m-auto md:m-6 text-lg bg-primary text-white rounded-full inline py-2 px-4 border-0">
            About Us
          </div>
        </div>
        <div className="m-3 md:m-6" data-aos="fade-up" data-aos-delay="400">
          <div className="my-auto flex flex-col space-4">
            <h2 className="h2 mb-4 text-center max-w-3xl m-auto">
              We help businesses manage and scale products
            </h2>
            <div className="flex flex-col my-4">
              <p className="mb-4 text-center  text-lg">
                XPERIENTIAL marketing takes center stage as our main service,
                offering a unique and immersive approach to connect brands with
                their audiences. We believe there is a growing need for brands
                to move beyond conventional advertising methods and embrace more
                interactive and memorable approaches.
              </p>
              <Link
                className=" self-center mx-6 text-center h-fit w-fit text-nowrap py-2 px-4 bg-transparent border-2 border-secondary hover:bg-secondary hover:text-black rounded me-6 transition-all"
                href="/aboutUs"
              >
                More about us
              </Link>
            </div>
            <p className="mt-4 mb-2 m-auto font-bold">We specialize in:</p>
            <ul className="grid grid-cols-1 w-fit m-auto">
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
          </div>
        </div>
      </div>
    </section>
  );
}
