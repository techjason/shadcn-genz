import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif, Crimson_Pro } from "next/font/google";
import "./globals.css";

import {
  EightiesComeBack,
  EightiesComeBackCondensed,
  EightiesComeBackExtraCondensed,
  EightiesComeBackSemiCondensed,
  EightiesComeBackUltraCondensed,
} from "./eighties-font";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-crimson-pro",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${crimsonPro.variable} ${EightiesComeBack.variable} 
        ${EightiesComeBackCondensed.variable}
        ${EightiesComeBackSemiCondensed.variable}
        ${EightiesComeBackExtraCondensed.variable}
        ${EightiesComeBackUltraCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
