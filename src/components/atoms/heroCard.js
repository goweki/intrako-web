import Link from "next/link";

export default function HeroCard() {
  return (
    <div
      id="heroCard"
      className="z-10 text-center px-4 py-8 rounded shadow-md lg:shadow-transparent bg-blue-100/70 backdrop-blur-sm lg:bg-transparent max-w-sm top-1/3 lg:top-1/4 left-1/2 lg:left-3/4 absolute transform -translate-x-1/2"
    >
      <div className="animate-fade">
        <h1 className="animate-up-in">
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
