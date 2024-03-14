"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import Header from "@/components/header";
import HeroCard from "@/components/atoms/heroCard";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setTheme(resolvedTheme);
  }, []);

  return (
    <main id="main" className="flex flex-col items-center justify-between p-0">
      <section
        id="hero"
        className="min-h-80 relative w-full py-12 px-12 max-w-screen-2xl m-auto h-screen max-h-[800px] bg-slate-100"
      >
        <HeroCard />
        <div className="grid grid-cols-2 w-full h-full absolute inset-0">
          <div className="bg-[url('/images/glow-figures.gif')] bg-cover bg-center animate-fade"></div>
          <div></div>
        </div>
      </section>

      <section id="about" className="w-full max-w-screen-2xl py-24 md:py-32">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-24 h-2 bg-blue-800 mb-4 mx-auto"></div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            We are a dynamic and fully integrated agency specializing in
            experiential marketing
          </h2>
          <p className="font-light text-xl text-gray-600 mb-6 leading-relaxed">
            Our approach is grounded in meticulous research, strategic thinking,
            and the excellent execution of marketing plans.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 p-12">
          <div className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75 p-12">
            <div className="relative z-10 text-center">
              INNOVATION & CREATIVITY
            </div>
            <Image
              src="/images/creativity.jpg"
              layout="fill"
              alt="img"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75 p-12">
            <div className="relative z-10 text-center">PROFESSIONALISM</div>
            <Image
              src="/images/professionalism.jpg"
              layout="fill"
              alt="img"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75 p-12">
            <div className="relative z-10 text-center">CLIENT-CENTRICITY</div>
            <Image
              src="/images/user-centricity.jpg"
              layout="fill"
              alt="img"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          </div>
        </div>
      </section>

      <section
        id="services"
        className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-2xl"
      >
        <div className="w-full h-full bg-[url('/images/design-tools.jpg')] bg-no-repeat bg-center bg-cover"></div>

        <div className="md:order-first bg-slate-100 p-12 md:p-24 flex flex-col justify-end items-center">
          {/* <div className="max-w-md"> */}
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
          {/* </div> */}
        </div>
      </section>

      <section className="relative w-full py-12 px-12 max-w-screen-2xl">
        <div className="relative z-10 text-center py-12 md:py-24">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
            Wondering what is next for your great idea / Product?
          </h1>
          <p className="mb-10 text-base md:text-lg font-bold">
            Let&apos;s help bring your vision and business to life!
          </p>
          <Link
            href="/contacts"
            className="inline-block bg-blue-600 hover:bg-blue-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
