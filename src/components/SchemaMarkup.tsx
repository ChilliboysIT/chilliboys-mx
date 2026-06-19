"use client";

export default function SchemaMarkup() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Chilli Boys Manufacturing",
    alternateName: "Chilli Boys MFG.",
    description:
      "Custom engineering and fabrication shop in Baja California Sur, Mexico. Specializing in metalwork, woodwork, pergolas, staircases, gates, and outdoor structures.",
    url: "https://chilliboys.mx",
    telephone: "+52-612-105-2006",
    email: "build@chilliboys.mx",
    address: {
      "@type": "PostalAddress",
      streetAddress: "KM 65 Highway 1",
      addressLocality: "El Pescadero",
      addressRegion: "Baja California Sur",
      postalCode: "23300",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.3667",
      longitude: "-110.1667",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "15:30",
      },
    ],
    priceRange: "$$$",
    image: "https://chilliboys.mx/logo.png",
    sameAs: [
      "https://instagram.com/chilliboys.mx",
      "https://facebook.com/chilliboys.mx",
      "https://plan.chilliboys.mx",
    ],
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Chilli Boys Manufacturing",
    url: "https://chilliboys.mx",
    logo: "https://chilliboys.mx/logo.png",
    sameAs: [
      "https://instagram.com/chilliboys.mx",
      "https://facebook.com/chilliboys.mx",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Chilli Boys Manufacturing",
    url: "https://chilliboys.mx",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://chilliboys.mx/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
