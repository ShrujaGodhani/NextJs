import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/componets/Nav"



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"  >

      <body>

        <Nav />

        {children}
      </body>
    </html>
  );
}
