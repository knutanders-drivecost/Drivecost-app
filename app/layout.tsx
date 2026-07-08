import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DriveCost Dashboard",
  description: "Premium vehicle ownership dashboard."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
