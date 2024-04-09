'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [top, setTop] = useState(true);
  // detect whether user has scrolled the page down by 200px
  useEffect(() => {
    //FUNC executed onScroll
    function scrollHandler() {
      window.scrollY > 200 ? setTop(false) : setTop(true);
    }
    //eventListener - scroll
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <section id="hero" className="sm:h-screen bg-cover bg-[url('/images/blue-animations.gif')] overflow-hidden">
      <div className="relative w-full h-full flex flex-col bg-primary/50 items-center justify-center">
        <div className="max-w-6xl px-4 sm:px-6 relative">
          {/* Hero content */}
          <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4 text-gray-200" data-aos="fade-up">
                Your partner in marketing and business development
              </h1>
              <p
                className="text-xl text-gray-300 mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We are a dynamic and fully integrated agency specializing in
                experiential marketing
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div data-aos="fade-up" data-aos-delay="400">
                  <a
                    className="btn text-black bg-orange-400 hover:bg-orange-600 w-full mb-4 sm:w-auto sm:mb-0"
                    href="/contacts"
                  >
                    Contact Us
                  </a>
                </div>
                {/* <div data-aos="fade-up" data-aos-delay="600">
                  <a
                    className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div> */}
              </div>
            </div>
            {/* <ModalVideo
              thumb={VideoThumb}
              thumbWidth={1024}
              thumbHeight={576}
              thumbAlt="Modal video thumbnail"
              video="/videos/video.mp4"
              videoWidth={1920}
              videoHeight={1080} /> */}
          </div>
        </div>
        {/* scrool down button */}
        <Link href='#brief-aboutUs' className={`transition-all ${top ? 'animate-bounce' : 'hidden'}`}>
          <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-white fill-none stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
