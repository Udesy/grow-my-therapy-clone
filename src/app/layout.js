import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from "@/components/layout";
import { FooterLegalBar } from "@/components/ui";

const muli = localFont({
  src: [
    { path: "./fonts/Muli-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Muli-Regular.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-sans",
});

const beaufort = localFont({
  src: "./fonts/Beaufort.woff2",
  variable: "--font-serif",
});

const printedMoments = localFont({
  src: "./fonts/PrintedMoments.woff2",
  variable: "--font-script",
});

export const metadata = {
  title: "Conejo Valley",
  description: "A clone Website by Uddeshya.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${muli.variable} ${beaufort.variable} ${printedMoments.variable} antialiased`}
    >
      <body className="max-w-[--width-page-max] mx-auto">
        <Header />
        {children}
        <Footer />
        <FooterLegalBar />
      </body>
    </html>
  );
}
