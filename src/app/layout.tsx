import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import type { WithContext, LocalBusiness } from "schema-dts";
import dynamic from "next/dynamic";
import Footer from "@/components/footer";
// import { Toaster } from "@/components/ui/sonner"
const Navigation = dynamic(() => import("@/components/navigation"));

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
    url: "https://click.studio",
    siteName: "CLICK.STUDIO",
    locale: "en_US",
    images: [
      {
        url: "https://lovable.dev/opengraph-image-p98pqg.png",
        width: 1200,
        height: 630,
        alt: "CLICK.STUDIO Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    description:
      "We create modern, high-converting websites for local businesses, startups, and content creators. Professional web design and development services.",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://click.studio"),
  alternates: {
    canonical: "https://click.studio",
  },
};

const businessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CLICK.STUDIO",
  url: "https://click.studio",
  logo: "https://lovable.dev/opengraph-image-p98pqg.png",
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
