import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Malcolm Stone",
  description: "Software engineering portfolio for Malcolm Stone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
