import localFont from "next/font/local";
import "./globals.css";
import Navbar from '@/components/header/index'
import Footer from '@/components/footer/Footer2'
import SmoothScroll from "@/components/SmoothScroll";
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

export const metadata = {
  title: "MuchMedia",
  description: "MuchMedia Studio",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link rel="icon" href="/logo.ico" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
