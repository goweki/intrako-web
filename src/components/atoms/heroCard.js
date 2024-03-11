export default function HeroCard() {
  return (
    <div className="z-10 text-center px-4 py-8 lg:left-3/4 rounded shadow-md lg:shadow-transparent bg-blue-100 lg:bg-transparent max-w-sm top-1/3 left-1/2 absolute transform -translate-x-1/2">
      <h1 className="text-center text-base md:text-2xl lg:text-3xl xl:text-4xl font-display font-light mb-6">
        We are about creating connections and supporting brands & products
      </h1>
      <a
        href="/"
        className="inline-block rounded bg-blue-600 hover:bg-blue-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
      >
        Contact Us
      </a>
    </div>
  );
}
