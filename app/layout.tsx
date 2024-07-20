import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { cn } from "@/lib/utils";
const Navbar = dynamic(() => import("@/components/navbar"));
const Footer = dynamic(() => import("@/components/footer"));
const archivo = Archivo({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "CareerMaps",
  description: "Explore new job vacancies all over the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          archivo.variable
        )}
      >
        <div className="relative">
          <Navbar />

          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
