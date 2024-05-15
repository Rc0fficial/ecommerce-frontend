import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col container mx-auto px-4 md:px-0  ${inter.className}`}
    >
      <Navbar />
      <Hero />
    </main>
  );
}
