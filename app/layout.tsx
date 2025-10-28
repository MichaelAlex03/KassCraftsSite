import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kassy's Krafts | Custom Hand-Painted Banners & Designs",
  description: "Custom hand-painted banners and personalized designs by Kassy. Affordable, unique creations perfect for parties, events, and special occasions. Based in Texas. Order your custom banner today!",
  keywords: ["custom banners", "hand-painted banners", "personalized banners", "party banners", "custom paint designs", "handcrafted banners", "custom signs", "Kassy's Krafts"],
  authors: [{ name: "Kassy's Krafts" }],
  creator: "Kassy's Krafts",
  publisher: "Kassy's Krafts",
  openGraph: {
    title: "Kassy's Krafts | Custom Hand-Painted Banners",
    description: "Handcrafted custom banners with love. Personalized designs for your special occasions. Affordable pricing starting at $35.",
    url: "https://yourdomain.com",
    siteName: "Kassy's Krafts",
    images: [
      {
        url: "/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Kassy's Krafts custom hand-painted banner example",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kassy's Krafts | Custom Hand-Painted Banners",
    description: "Handcrafted custom banners with love. Personalized designs for your special occasions.",
    images: ["/hero-banner.png"],
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
  verification: {
    // Add your verification codes when you get them:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kassy's Krafts",
              "image": "/hero-banner.png",
              "description": "Custom hand-painted banners and personalized designs for all occasions",
              "priceRange": "$35-$75",
              "telephone": "",
              "email": "kraftinginspirations@gmail.com",
              "address": {
                "addressLocality": "San Antonio",
                "addressRegion": "Texas",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://instagram.com/kraftsbykassy_"
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "paymentAccepted": "Cash, CashApp, Venmo",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "lowPrice": "35",
                "highPrice": "75"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
