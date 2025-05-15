import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog App",
  description: "Blog App",
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
   return (
    <html lang="en">
    <body className={inter.className}>
      <header className="bg-slate-800 text-white p-4">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              My Blog
            </Link>
            <ul className="flex gap-4">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {children}
      {/* <footer className="bg-slate-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} My Simple Blog</p>
        </div>
      </footer> */}
    </body>
  </html>
   )
}