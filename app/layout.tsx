import type { Metadata } from "next";
import { Roboto_Condensed, Inter } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Trailor Ride",
  description: "Your Ultimate Trailer Rental Solution",
  
};
const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

// Only the weights the landing page actually uses are loaded.
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased ${ roboto_condensed.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
