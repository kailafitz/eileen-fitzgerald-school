import HomePageAnimation from "@/components/custom/homePageAnimation";
import Intro from "@/components/custom/intro";
import Name from "@/components/custom/name";
import ScrollToTop from "@/components/custom/scrollToTop";
import Script from "next/script";
import { Organization, WithContext } from "schema-dts";

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Eileen Fitzgerald School of Speech & Drama",
  url: "https://eileenfitzgerald-school.com",
  logo: "https://www.eileenfitzgerald-school.com/_next/image?url=%2Flogo.png&w=256&q=75",
  sameAs: [
    "https://www.facebook.com/eileenfitzgeraldschoolofspeechanddrama",
    "https://www.instagram.com/eileenfitzgerald_drama/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+353-86-818-75495",
    contactType: "Customer Service",
    areaServed: "EU",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Ennis",
    addressRegion: "Clare",
    postalCode: "",
    addressCountry: "IE",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="organisation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <HomePageAnimation />
      <div id="home-content" className="overflow-hidden">
        <Name />
        <Intro />
        <ScrollToTop />
      </div>
    </>
  );
}
