"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import Header from "@/components/header";
import HeroCard from "@/components/atoms/heroCard";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setTheme(resolvedTheme);
  }, []);

  return (
    <>
      <Header />
      <main
        id="main"
        className="flex flex-col items-center justify-between p-0"
      >
        <section
          id="hero"
          className="relative w-full py-12 px-12 max-w-screen-xl m-auto h-screen max-h-[800px]"
        >
          <HeroCard />
          <div className="grid grid-cols-2 w-full h-full absolute inset-0">
            <div className="bg-[url('/images/Featured-01.jpg')] bg-cover"></div>
            <div></div>
          </div>
        </section>

        {/* aboutUs */}
        <section
          id="aboutUs"
          className="max-w-xl mx-auto text-center pt-24 md:pt-32"
        >
          <div className="w-24 h-2 bg-blue-800 mb-4 mx-auto"></div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            We thrive on connections and obsessing over client pain-points
          </h2>
          <p className="font-light text-gray-600 mb-6 leading-relaxed">
            Human centred and relentless approach to initiating and fostering
            growth
          </p>
        </section>
        {/* {% endif %} */}

        <section className="flex flex-wrap gap-2">
          {/* {% for category in collections.category | reverse | limit(3) %} */}
          <div className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75 p-12">
            <div className="relative z-10">Title1</div>
            <img
              src="https://images.unsplash.com/photo-1490129375591-2658b3e2ee50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2244&q=80"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75 p-12">
            <div className="relative z-10">Title1</div>
            <img
              src="https://images.unsplash.com/photo-1490129375591-2658b3e2ee50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2244&q=80"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75 p-12">
            <div className="relative z-10">Title1</div>
            <img
              src="https://images.unsplash.com/photo-1490129375591-2658b3e2ee50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2244&q=80"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          </div>
          {/* {% endfor %} */}
        </section>

        {/* {% for post in collections.blogs | reverse | limit(1, 1) %} */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white p-12 md:p-24 flex justify-start items-center">
            <a href="/post">
              <img
                src="https://images.unsplash.com/photo-1490129375591-2658b3e2ee50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2244&q=80"
                className="w-full max-w-md"
              />
            </a>
          </div>

          <div className="md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center">
            <div className="max-w-md">
              <div className="w-24 h-2 bg-blue-800 mb-4"></div>
              <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
                Our Services
              </h2>
              <ul className="list-disc my-4">
                <li>Market Research</li>
                <li>Product Strategy & Management</li>
                <li>Product / Visual Design</li>
                <li>Business development</li>
              </ul>
              {/* <a
                href="/post"
                className="inline-block border-2 border-blue-800 font-light text-blue-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-blue-800 hover:text-white"
              >
                Read more
              </a> */}
            </div>
          </div>
        </section>
        {/* {% endfor %} */}

        {/* {% if home.footer_cta_image %} */}
        <section className="relative w-full py-12 px-12 bg-slate-950">
          <div className="relative z-10 text-center py-12 md:py-24">
            <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
              Wondering what is next for your great idea / Product?
            </h1>
            <p className="text-white mb-10 text-base md:text-lg font-bold">
              Let&apos;s help bring your vision and business to life!
            </p>
            <Link
              href="/contacts"
              className="inline-block bg-blue-600 hover:bg-blue-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
            >
              Contact Us
            </Link>
          </div>

          <img
            src="/images/Featured-02.jpg"
            className="w-full h-full absolute inset-0 object-cover opacity-50"
          />
        </section>
        {/* {% endif %} */}
      </main>
      <Footer />
    </>
  );
}
