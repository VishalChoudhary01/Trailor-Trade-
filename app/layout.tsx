import type { Metadata } from "next";
import { Roboto_Condensed, Inter,Russo_One } from "next/font/google";
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

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const ruso = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ruso",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased ${ roboto_condensed.variable} ${inter.variable} ${ruso.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
