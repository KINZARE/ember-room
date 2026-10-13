import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: "Ember Room — Cocktails, fire & late plates", template: "%s · Ember Room" },
  description: site.description,
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ember Room — Cocktails, fire & late plates",
    description: site.description,
    type: "website",
    images: [{ url: site.heroImage }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f9f5ee",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
