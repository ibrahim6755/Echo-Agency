import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const metadata: Metadata = {
  title: "Eco Agency",
  description: "We Deliver the Best Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
