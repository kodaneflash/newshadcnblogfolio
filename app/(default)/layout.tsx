import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Analytics } from "@vercel/analytics/react"

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SiteFooter } from "@/components/layout/footer";
import Header from "@/components/layout/header";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.jamesarcher.io"),
  title: {
    default: "James Archer | Solo Entrepreneur | Founder",
    template: "%s | James Archer | Solo Entrepreneur | Founder",
  },
  description: "I teach solo entrepreneurs how to build and scale successful online businesses.",
  openGraph: {
    title: "James Archer | Solo Entrepreneur | Founder",
    description: "I teach solo entrepreneurs how to build and scale successful online businesses.",
    url: "https://jamesarcher.io",
    siteName: "James Archer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/imaginify/image/upload/v1726992034/homepageog_nxavfe.png", // Add a default OG image
        width: 1200,
        height: 630,
        alt: "James Archer - Solo Entrepreneur & Founder",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "James Archer",
    card: "summary_large_image",
    images: ["https://res.cloudinary.com/imaginify/image/upload/v1726992034/homepageog_nxavfe.png"], // Add a default Twitter image
  },
  verification: {
    google: "YourGoogleVerificationToken", // Update with your new Google verification token
    yandex: "YourYandexVerificationToken", // Update with your new Yandex verification token
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx("text-black  dark", GeistSans.variable, GeistMono.variable)}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Analytics />
          <main className="min-h-screen antialiased">
            <Header />
            {children}
            <SiteFooter />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}