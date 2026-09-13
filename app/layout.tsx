import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { ContactModalProvider } from "@/context/ContactModalContext";
import ContactModal from "@/components/Contact/ContactModal";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kshirsagar | We Build Digital Futures",
  description: "Web, mobile, AI, cloud and business software solutions designed, developed and supported under one roof.",
  metadataBase: new URL("https://www.kshirsagar.co.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-purple-500 selection:text-white">
        <ContactModalProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <ContactModal />
          </SmoothScroll>
        </ContactModalProvider>
      </body>
    </html>
  );
}
