"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileMenu from "./atoms/mobileMenu";

export default function Header() {
  const pathname = usePathname();
  return (
    <header
      id="header"
      className="fixed w-full z-30 bg-gray-800/50 backdrop-blur-xl"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link
              href="/"
              className="block font-bold text-orange-300 hover:underline"
              aria-label="Intrako"
            >
              INTRAKO
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {menuItems.map((v) => (
                <li key={v.name} className="m-4">
                  <Link
                    href={v.link}
                    className={`${pathname === v.link
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

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Header() {
//   const pathname = usePathname();
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div id="navbar" className="absolute h-24 z-50 w-full">
//       <div className="flex flex-row justify-between max-w-screen-xl p-6 m-auto">
//         {/* logo */}
//         <div id="logo" className="flex items-center justify-center">
//           <Link
//             href="/"
//             className="text-white uppercase font-bold text-2xl tracking-widest mix-blend-darken"
//           >
//             {/* <img src="{{ settings.logo }}" className="h-20 w-64 object-contain object-center" /> */}
//             INTRAKO
//           </Link>
//         </div>
//         {/* menu items */}
//         <div id="menuItems" className="lg:flex flex-row gap-4 hidden mr-4">
//           {menuItems.map((v) => (
//             <Link
//               key={v.name}
//               href={v.link}
//               className={`${
//                 pathname !== "/" && pathname === v.link
//                   ? "text-blue-300 font-bold"
//                   : pathname === v.link
//                   ? "font-bold text-blue-600"
//                   : ""
//               } ${pathname === "/" ? "" : "text-slate-100"} hover:underline`}
//             >
//               {v.name}
//             </Link>
//           ))}
//           {/* <ThemeToggler /> */}
//         </div>
//         {/* hamburger menu - upto lg-screen */}
//         <div id="hamburgerMenu" className="flex items-center lg:hidden">
//           <button onClick={() => setShowMenu((prev) => !prev)}>
//             <svg
//               className={`w-8 h-8 ${pathname !== "/" ? "text-slate-300" : ""}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>

//           {showMenu && (
//             <div className="transition-all fixed inset-0 w-full h-full bg-white z-50 text-blue-800">
//               <div className="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-2xl uppercase font-bold tracking-widest space-y-6">
//                 <button
//                   onClick={() => setShowMenu((prev) => !prev)}
//                   className="absolute top-0 left-0 mt-8 ml-6"
//                 >
//                   <svg
//                     className="w-8 h-8"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
//                     ></path>
//                   </svg>
//                 </button>
//                 {/* {% if navigation.items %} */}
//                 {/* {% for item in navigation.items %} */}
//                 {menuItems.map((v) => (
//                   <Link
//                     key={v.name}
//                     href={v.link}
//                     onClick={() => setShowMenu(false)}
//                     className="transition-all inline-block border-b-4 border-transparent hover:border-blue-900"
//                   >
//                     {v.name}
//                   </Link>
//                 ))}
//               </div>
//               <div className="absolute inset-0 w-full h-full bg-blue-900 bg-opacity-30"></div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

const menuItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/aboutUs" },
  { name: "Services", link: "/services" },
  { name: "Contacts", link: "/contacts" },
];
