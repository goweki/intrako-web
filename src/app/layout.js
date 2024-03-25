// import { Inter } from "next/font/google";
// import "./css/globals.css";
// import { Providers } from "./providers";
// import PageIllustration from "@/components/page-illustration";
// import Footer from "@/components/footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "INTRAKO",
//   description: "INTRAKO website",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <Providers>
//           <main className="grow">
//             <PageIllustration />

//             {children}
//           </main>

//           <Footer />
//         </Providers>
//       </body>
//     </html>
//   );
// }

import "./css/globals.css";

import { Inter } from "next/font/google";

import Header from "@/components/header";
import { Providers } from "./providers";
// import Banner from "@/components/banner";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "INTRAKO",
  description: "INTRAKO website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        <Providers>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            {children}
            {/* <Banner /> */}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
