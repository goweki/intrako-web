"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileMenu from "./atoms/mobileMenu";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <svg
                className="w-8 h-8 fill-current text-purple-600"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
              </svg>
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
                    className={`${
                      pathname !== "/" && pathname === v.link
                        ? "text-orange-300 font-bold"
                        : pathname === v.link
                        ? "font-bold text-orange-300"
                        : ""
                    } ${
                      pathname === "/" ? "" : "text-slate-100"
                    } hover:underline`}
                  >
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <MobileMenu />
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
  { name: "About", link: "/#about" },
  { name: "Services", link: "/#services" },
  { name: "Contacts", link: "/contacts" },
];
