import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DriveCost – Vehicle ownership dashboard",
  description: "Track the true cost of owning your vehicle."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
