import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container-fluid mx-auto bg-gray-50 relative  overflow-hidden ">
          <Header />
          <section className="container mx-auto p-2 md:p-0">
            <div className="z-10 relative">
              {children}
            </div>
          </section>
          <Footer />
          <div>
            <div className="absolute right-0  top-64  rounded-full h-72 w-72 bg-indigo-100"></div>
            <div className="absolute left-0   top-96  rounded-full h-72 w-72 bg-orange-100"></div>
            <div className="absolute left-2/4 top-500  rounded-full h-72 w-72 bg-indigo-100"></div>
            <div className="absolute right-0  top-1/4  rounded-full h-72 w-72 bg-green-100"></div>
            <div className="absolute right-0  top-3/4  rounded-full h-72 w-72 bg-red-100"></div>
            <div className="absolute left-0  top-1/3  rounded-full h-72 w-72 bg-yellow-100"></div>
          </div>
        </div>
        <GoogleAnalytics gaId="G-VV225FW7M1" />
      </body>
    </html >
  );
}
