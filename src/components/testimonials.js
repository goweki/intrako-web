import Image from "next/image";
import { CardTestimonial } from "./cards";

export default function Testimonials() {
  return (
    <section className="px-6 py-24 w-full" id="brief-aboutUs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className=" mb-4 text-center max-w-3xl m-auto">Testimonials</h2>
          <p className="mb-4 text-center  text-lg">
            Don&apos;t just take our word for it. Here is what our partners and
            clients have to say about our services
          </p>
        </div>

        {/* Testimonials */}
        <div className="mx-auto grid gap-8 md:grid-cols-2 lg:gap-16 items-start lg:max-w-none">
          {/* 1st testimonial */}
          {persons.map((v, i) => (
            <CardTestimonial
              key={i}
              name={v.name}
              company={v.company}
              quote={v.quote}
              image={v.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const persons = [
  {
    company: "eKRAAL Innovation Hub",
    quote:
      "Intrako was a great resource in terms of subject-matter expertise when rolling out a new product for the East African market",
    image: "/images/ekraal_hub.jpg",
  },
  {
    company: "Ongole Beef",
    quote:
      "Great communication and perfect execution of complex marketing tasks. Loved working with Intrako",
    image: "/images/ongole_beef.jpeg",
  },
  // {
  //   company: "Kenya Torism Board",
  //   quote:
  //     "Intrako are champions of user-centred design and market driven operations. Such an asset to clients.",
  //   photo: "/images/placeholder-dp.jpg",
  // },
];
