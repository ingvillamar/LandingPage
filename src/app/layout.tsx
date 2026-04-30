import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jean Villamar — Digital Solutions",
  description: "Building scalable digital solutions that drive growth and innovation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
