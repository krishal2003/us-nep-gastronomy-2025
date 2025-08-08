import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "US-Nepal Gastronomy Exchange 2025 | Cultural Diplomacy Through Food",
  description:
    "A global culinary collaboration celebrating Nepali cuisine, culture, and innovation with Michelin-starred chefs from the USA and Nepal — from a gala in Kathmandu to a historic cookout at Everest Basecamp.",
  generator: "krishal-basnet",
  authors: [{ name: "US-Nepal Gastronomy Chef’s Association" }],
  keywords: [
    "Nepali cuisine",
    "Michelin chefs",
    "Everest Basecamp cookout",
    "Kathmandu gala dinner",
    "cultural diplomacy",
    "culinary tourism",
    "fusion cuisine",
    "Gastronomy Exchange 2025",
    "Chef Arjun Ranabhat",
    "Nepal food event",
  ],
  openGraph: {
    title: "US-Nepal Gastronomy Exchange 2025 | Where Culinary Worlds Meet",
    description:
      "Experience the fusion of Nepali tradition and global luxury with world-renowned chefs at a once-in-a-lifetime gastronomy event across Kathmandu and Everest Basecamp.",
    url: "https://usnepal-gastronomy.com",
    siteName: "US-Nepal Gastronomy Exchange",
    images: [
      {
        url: "https://usnepal-gastronomy.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Buff momo with truffle espuma served at the Everest cookout",
      },
    ],
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Celebrate the rich culinary heritage of Nepal with world-class chefs at the US-Nepal Gastronomy Exchange 2025 — featuring a five-course rooftop gala and a high-altitude Everest Basecamp cookout."
        />
        <meta
          name="keywords"
          content="Nepali cuisine, Everest cookout, gala dinner Kathmandu, Michelin chefs Nepal, cultural diplomacy, buff momo, gastronomy event, Chef Arjun Ranabhat"
        />
        <meta name="author" content="US-Nepal Gastronomy Chef’s Association" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="US-Nepal Gastronomy Exchange 2025 | Where Culinary Worlds Meet"
        />
        <meta
          property="og:description"
          content="A landmark culinary event bringing together top chefs from Nepal and the US — from rooftop gala dinners to cooking at the roof of the world, Everest Basecamp."
        />
        <meta
          property="og:image"
          content="https://usnepal-gastronomy.com/og-image.jpg"
        />
        <meta property="og:url" content="https://usnepal-gastronomy.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="US-Nepal Gastronomy Exchange 2025"
        />
        <meta
          name="twitter:description"
          content="A celebration of Nepali cuisine and cross-cultural innovation — featuring Michelin chefs, rare ingredients, and epic locations."
        />
        <meta
          name="twitter:image"
          content="https://usnepal-gastronomy.com/og-image.jpg"
        />

        <link rel="icon" href="/usa.png" type="image/png" />

        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
