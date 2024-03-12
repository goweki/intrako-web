import Link from "next/link";

export default function HeroCard() {
  return (
    <div className="z-10 text-center px-4 py-8 rounded shadow-md lg:shadow-transparent bg-blue-100 lg:bg-transparent max-w-sm top-1/3 lg:top-1/4 left-1/2 lg:left-3/4 absolute transform -translate-x-1/2">
      <div className="animate-fade">
        <h1 className="animate-up-in text-center text-sm md:text-2xl lg:text-3xl xl:text-4xl font-display font-light mb-6">
          Your partner in marketing and business development
        </h1>
        <Link
          href="/contacts"
          className="inline-block rounded bg-blue-600 hover:bg-blue-800 text-white uppercase text-xs md:text-sm tracking-widest font-heading px-8 py-4"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
