import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import type { WithContext, LocalBusiness } from "schema-dts";
import dynamic from "next/dynamic";
import Footer from "@/components/footer";
// import { Toaster } from "@/components/ui/sonner"
const Navigation = dynamic(() => import("@/components/navigation"));

const domain: string | URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://click.lehustler.com";

export const metadata: Metadata = {
  title: "CLICK.STUDIO - High-Converting Websites for Local Businesses",
  description:
    "We create modern, high-converting websites for local businesses, startups, and content creators. Professional web design and development services.",
  keywords: [
    "web design",
    "web development",
    "local business websites",
    "startup websites",
    "professional web design",
    "CLICK.STUDIO",
    "Ethiopia web agency",
  ],
  authors: [{ name: "CLICK.STUDIO" }],
  openGraph: {
    title: "CLICK.STUDIO - High-Converting Websites for Local Businesses",
    description:
      "We create modern, high-converting websites for local businesses, startups, and content creators. Professional web design and development services.",
    type: "website",
    url: domain,
    siteName: "CLICK.STUDIO",
    locale: "en_US",
    images: [
      {
        url: `${domain}/opengraph-image-p98pqg.png`,
        width: 1200,
        height: 630,
        alt: "CLICK.STUDIO Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dev4josh",
    description:
      "We create modern, high-converting websites for local businesses, startups, and content creators. Professional web design and development services.",
    images: [`${domain}/opengraph-image-p98pqg.png`],
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      sizes: "192x192",
      type: "image/png",
      url: "/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      sizes: "512x512",
      type: "image/png",
      url: "/android-chrome-512x512.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-ocon.png",
    },
    {
      rel: "shortcut icon",
      url: "/favicon.ico",
    },
  ],
  metadataBase: new URL(domain),
  alternates: {
    canonical: domain,
  },
};

const businessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CLICK.STUDIO",
  url: domain,
  logo: `${domain}/opengraph-image-p98pqg.png`,
  description:
    "We create modern, high-converting websites for local businesses, startups, and content creators. Professional web design and development services.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ET",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "info@click.studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <link
          href="https://calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <Script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
          strategy="afterInteractive"
        ></Script>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
