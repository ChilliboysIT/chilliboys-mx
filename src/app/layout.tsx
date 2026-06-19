import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Chilli Boys MFG. | Engineering & Fabrication — Baja California Sur",
  description:
    "You Dream It. We Build It. Custom engineering and fabrication in Baja California Sur, Mexico. Metalwork, woodwork, pergolas, staircases, gates, and bespoke outdoor structures.",
  keywords: [
    "Chilli Boys", "fabrication", "engineering", "Baja California Sur",
    "Cerritos Beach", "custom metalwork", "pergolas", "staircases",
    "handrails", "desert modern", "coastal rustic", "El Pescadero",
    "Todos Santos", "La Paz",
  ],
  authors: [{ name: "Chilli Boys Manufacturing" }],
  openGraph: {
    title: "Chilli Boys MFG. | Engineering & Fabrication",
    description: "You Dream It. We Build It. — Baja California Sur, Mexico",
    url: "https://chilliboys.mx",
    siteName: "Chilli Boys Manufacturing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chilli Boys MFG.",
    description: "You Dream It. We Build It.",
  },
  robots: "index, follow",
  alternates: { canonical: "https://chilliboys.mx" },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
