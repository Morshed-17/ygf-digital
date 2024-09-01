import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import './globals.css'

import Navbar from "@/components/shared/Header/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { Toaster } from "sonner";
const inter = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "YGF Digital",
    template: "%s | YGF Digital",
  },
  description: "One stop solution for bussines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={`${inter.className} pattern-bg`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
