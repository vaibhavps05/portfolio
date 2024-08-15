import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaibhav's Portfolio",
  description: "Created by Vaibhav using create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="w-full relative items-center justify-center">
          <Navbar />
        </div>
        {children}
        <div >
        <footer className="bg-zinc-50 text-center dark:bg-black lg:text-left mb-0">
          <div className="bg-black/5 p-4 text-center text-surface dark:text-neutral-400">
          Inspired by dank memes and big dreams :') <br /><br />
            © Vaibhav Pratap Singh 2023
          </div>
        </footer>
        </div>
      </body>
    </html>
  );
}
