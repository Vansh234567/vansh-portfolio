import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

const title = "Vansh Bhatia | Portfolio";
const description =
  "Mathematics & Computing student at MIT Manipal passionate about Data Analytics, Quantitative Finance and Entrepreneurship.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
