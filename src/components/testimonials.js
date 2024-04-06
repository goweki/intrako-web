import Image from "next/image";
import { CardTestimonial } from "./cards";

export default function Testimonials() {
  return (
    <section className="px-6 py-24 w-full" id="brief-aboutUs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 mb-4 text-center max-w-3xl m-auto">
            Don&apos;t just take our word for it
          </h2>
          <p className="mb-4 text-center  text-lg">
            Here is what our partners and clients have to say about our services
          </p>
        </div>

        {/* Testimonials */}
        <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
          {/* 1st testimonial */}
          {persons.map((v, i) => (
            <CardTestimonial
              key={i}
              name={v.name}
              company={v.company}
              quote={v.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const persons = [
  {
    name: "Person A",
    company: "Macha Logistics",
    quote:
      "Intrako was a great resource in terms of subject-matter expertise hwne rolling out a new product for the East African market",
    photo: "/images/placeholder-dp.jpg",
  },
  {
    name: "Person B",
    company: "Ong beef",
    quote:
      "Great communication and perfect execution of complex marketing tasks. Loved working with Intrako",
    photo: "/images/placeholder-dp.jpg",
  },
  {
    name: "Person C",
    company: "Kenya Torism Board",
    quote:
      "Intrako are champions of user-centred design and market driven operations. Such an asset to clients.",
    photo: "/images/placeholder-dp.jpg",
  },
];
