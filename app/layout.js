import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kevin's Cardboard Box",
  description: "Learn more about more here on my portfolio!",
};

const styles = {
  background: "white",
  color: "black",
  fontFamily: "Aoboshi One",
  fontWeight: "400",
  fontStyle: "normal",
  overflowY: "scroll"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={ styles} className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
