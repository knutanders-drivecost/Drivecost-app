import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DriveCost – Know the true cost of owning your car",
  description: "Track vehicle ownership costs, compare cars and make smarter financial decisions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
