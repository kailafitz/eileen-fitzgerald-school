import React from "react";
import ContactDetails from "@/components/custom/contactDetails";
import Container from "@/components/custom/container";
import Locations from "@/components/custom/locations";
import { Metadata } from "next";
import ScrollToTop from "@/components/custom/scrollToTop";
import Script from "next/script";
import { ContactPage, WithContext } from "schema-dts";

const jsonLd: WithContext<ContactPage> = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Us",
  description:
    "Get in touch with The Eileen Fitzgerald School of Speech & Drama. We're here to help with customer service inquiries and support.",
  url: "https://eileenfitzgerald-school.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "The Eileen Fitzgerald School of Speech & Drama",
    url: "https://eileenfitzgerald-school.com",
    logo: "https://www.eileenfitzgerald-school.com/_next/image?url=%2Flogo.png&w=256&q=75",
    sameAs: [
      "https://www.facebook.com/eileenfitzgeraldschoolofspeechanddrama",
      "https://www.instagram.com/eileenfitzgerald_drama/",
    ],
    foundingDate: "1992-01-01",
    founder: {
      "@type": "Person",
      name: "Eileen Fitzgerald",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+353-86-818-75495",
      contactType: "Customer Service",
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
  },
};

export const metadata: Metadata = {
  title: "Contact | Eileen Fitzgerald",
  description:
    "Get in touch with The Eileen School of Speech and Drama by email, phone or through social media. Class location details can also be found on this page",
  openGraph: {
    title: "Contact | The Eileen Fitzgerald School of Speech and Drama",
    description:
      "Get in touch with The Eileen School of Speech and Drama by email, phone or through social media. Class location details can also be found on this page",
  },
};

const Contact = () => {
  return (
    <>
      <Script
        id="organisation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div className="relative w-full overflow-hidden md:overflow-x-clip md:overflow-y-visible">
        <Container className="pb-10">
          <ContactDetails />
        </Container>
        <div className="bg-primary pb-10" id="locations">
          <Container>
            <Locations />
          </Container>
        </div>
        <ScrollToTop />
      </div>
    </>
  );
};

export default Contact;
