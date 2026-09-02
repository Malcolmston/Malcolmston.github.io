import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Malcolm Stone",
  description: "Full-stack software engineering portfolio for Malcolm Stone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
