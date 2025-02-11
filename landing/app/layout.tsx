import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({
    weight:['200','300','400','500','600','700','800','900','1000'],
    subsets:['latin']
})
export const metadata: Metadata = {
  title: "My LandingPage",
  description: "LandingPage maked with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}