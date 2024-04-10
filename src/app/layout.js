import "./css/globals.css";
import { Inter, Dancing_Script } from "next/font/google";
import Header from "@/components/header";
import { Providers } from "./providers";
// import Banner from "@/components/banner";
import Footer from "@/components/footer";

export const metadata = {
  title: "INTRAKO",
  description: "Your marketing and business development partner",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${dancingScript.variable}`}>
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
