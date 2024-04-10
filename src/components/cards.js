import Image from "next/image";
import Link from "next/link";

export function CardServicesBrief({ title, children }) {
  return (
    <div
      className={`overflow-hidden min-h-60 group flex flex-col justify-end items-center border-1 bg-white/20 border-gray-500 shadow hover:border-transparent hover:bg-primary/80 transition-all cursor-default`}
    >
      <div className="rounded-full p-4 bg-transparent text-transparent group-hover:scale-125 group-hover:text-gray-200 transition-all">
        {children}
      </div>
      <h5 className="pt-4 w-full bg-gradient-to-b from-black/0 via-black/80 to-black/90 pb-4 text-white group-hover:scale-110 font-semibold transition-all text-center">
        {title}
      </h5>
    </div>
  );
}

export function CardServices({ title, content, children }) {
  return (
    <div
      className="relative flex h-full flex-col items-center rounded border-2 border-gray-300 p-6"
      data-aos="fade-up"
      data-aos-anchor="[data-aos-id-blocks]"
    >
      <div className="rounded-full bg-gray-900 text-white p-4 mb-2">
        {children}
      </div>
      <h4 className="h4 mb-2 text-center">{title}</h4>
      <p className="text-lg text-gray-600 text-center">{content}</p>
    </div>
  );
}

export function CardTestimonial({ name, company, quote, image }) {
  return (
    <div
      className="h-full rounded group flex flex-col p-6 bg-primary/20 transition-all cursor-default shadow hover:shadow-lg hover:bg-primary"
      data-aos="fade-up"
    >
      <div>
        <div className="relative inline-flex flex-col mb-4">
          <Image
            className="rounded-full"
            src={image}
            width={48}
            height={48}
            alt="testimonial-img"
          />
          <svg
            className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-sky-600"
            viewBox="0 0 24 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
          </svg>
        </div>
      </div>
      <blockquote className="flex flex-col flex-grow text-gray-600  group-hover:text-gray-300 transition-all">
        {quote}
      </blockquote>
      <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-400">
        {/* <cite className="not-italic group-hover:text-gray-200">{name}</cite> */}
        <span
          className="italic font-light transition duration-150 ease-in-out group-hover:text-gray-300"
          href="#0"
        >
          {/* {" "} */}
          {company}
        </span>
      </div>
    </div>
  );
}

export function CardMission({ title, content, image }) {
  return (
    <div
      data-aos="zoom-in"
      className="group my-4 mx-auto h-full w-full flex flex-col items-center border rounded-lg md:flex-row md:max-w-xl border-gray-700 bg-primary/80 hover:bg-primary cursor-default shadow"
    >
      <img
        className="object-cover w-full h-full rounded-t-lg md:w-48 md:rounded-none md:rounded-s-lg"
        src={image}
        alt={`img-${title}`}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-3 text-gray-400 font-bold">{title}</h5>
        <p className="max-w-full mb-2 group-hover:text-white font-medium tracking-tight text-gray-200 transition-all">
          {content}
        </p>
      </div>
    </div>
  );
}

export function CardCoreValues({ title, content, children }) {
  return (
    <div
      className="relative flex h-full flex-col items-center rounded border-2 border-gray-300 p-6"
      data-aos="fade-up"
      data-aos-anchor="[data-aos-id-blocks]"
    >
      {children}
      <h4 className="h4 mb-2">{title}</h4>
      <p className="text-lg text-gray-600 text-center">{content}</p>
    </div>
  );
}
