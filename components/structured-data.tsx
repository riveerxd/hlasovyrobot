export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "hlasovyrobot.cz",
    "url": "https://hlasovyrobot.cz",
    "logo": "https://hlasovyrobot.cz/images/logo.png",
    "description": "Tvoříme Voiceboty, kteří pracují 24/7, rozumí volajícím a řeší jejich problémy autonomně a bez čekání.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Londýnská 254/7",
      "addressLocality": "Praha",
      "postalCode": "120 00",
      "addressCountry": "CZ"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+420777325590",
      "contactType": "customer service",
      "email": "radek.hrehor@gmmedia.cz"
    },
    "sameAs": [
      // Add your social media URLs here
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 