import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DriveCost – Know the true cost of owning your car",
  description: "A premium vehicle ownership cost platform for tracking, comparing and reducing car costs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
