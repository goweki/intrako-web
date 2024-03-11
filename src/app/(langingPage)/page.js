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
    <>
      <Header />
      <main
        id="main"
        className="flex flex-col items-center justify-between p-0"
      >
        <section
          id="hero"
          className="relative w-full py-12 px-12 max-w-screen-2xl m-auto h-screen max-h-[800px] bg-slate-100"
        >
          <HeroCard />
          <div className="grid grid-cols-2 w-full h-full absolute inset-0">
            <div className="bg-[url('/images/Featured-01.jpg')] bg-cover animate-fade"></div>
            <div></div>
          </div>
        </section>

        <section
          id="aboutUs"
          className="w-full max-w-screen-2xl py-24 md:py-32"
        >
          <div className="max-w-xl mx-auto text-center">
            <div className="w-24 h-2 bg-blue-800 mb-4 mx-auto"></div>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              We are a dynamic and fully integrated agency specializingin
              experiential marketing
            </h2>
            <p className="font-light text-gray-600 mb-6 leading-relaxed">
              Our approach is grounded in meticulous research, strategi
              thinking, and the excellent ezecution of marketing plans.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 p-12">
            <div className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75 p-12">
              <div className="relative z-10">Title1</div>
              <Image
                src="/images/card-image.jpg"
                layout="fill"
                objectFit="cover"
                alt="img"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
            </div>
            <div className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75 p-12">
              <div className="relative z-10">Title1</div>
              <Image
                src="/images/Featured-02.jpg"
                layout="fill"
                objectFit="cover"
                alt="img"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
            </div>
            <div className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75 p-12">
              <div className="relative z-10">Title1</div>
              <Image
                src="/images/Featured-02.jpg"
                layout="fill"
                objectFit="cover"
                alt="img"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-2xl">
          <div className="bg-white p-12 md:p-24 flex justify-start items-center">
            <Link href="/post">
              <img
                src="/images/Featured-02.jpg"
                className="w-full max-w-md"
                alt="img"
              />
            </Link>
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
            </div>
          </div>
        </section>

        <section className="relative w-full py-12 px-12 bg-slate-950 max-w-screen-2xl">
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
            alt="img"
            className="w-full h-full absolute inset-0 object-cover opacity-50"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
