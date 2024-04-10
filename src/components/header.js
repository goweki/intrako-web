"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileMenu from "./atoms/mobileMenu";

export default function Header() {
  const pathname = usePathname();
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 32px
  useEffect(() => {
    //FUNC executed onScroll
    function scrollHandler() {
      window.scrollY > 32 ? setTop(false) : setTop(true);
    }
    //eventListener - scroll
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      id="header"
      className={`w-full z-30 fixed transition-all border-b border-transparent ${
        top ? "" : "bg-primary/80 backdrop-blur-md shadow-lg border-grey-800/20"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between min-h-16">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link
              href="/"
              className="block font-bold text-orange-300 hover:scale-110 transition-all"
              aria-label="Intrako"
            >
              {/* INTRAKO */}
              <Image
                height={32}
                width={80}
                src={"/images/Intrako_logo.svg"}
                alt="logo"
                className="object-cover"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {menuItems.map((v) => (
                <li key={v.name} className="mx-4">
                  <Link
                    href={v.link}
                    className={`${
                      pathname === v.link
                        ? "font-bold text-orange-300"
                        : "text-slate-100"
                    } hover:underline`}
                  >
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <MobileMenu menuItems={menuItems} />
        </div>
      </div>
    </header>
  );
}

const menuItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/aboutUs" },
  { name: "Services", link: "/services" },
  { name: "Blog", link: "/blog" },
  { name: "Contacts", link: "/contacts" },
];
