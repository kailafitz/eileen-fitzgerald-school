import React from "react";
import Staff from "@/components/custom/staff";
import Testimonials from "@/components/custom/testimonials";
import { Metadata } from "next";
import Container from "@/components/custom/container";
import ScrollToTop from "@/components/custom/scrollToTop";
import ActionBanner from "@/components/custom/actionBanner";
import Script from "next/script";
import { AboutPage, WithContext } from "schema-dts";

const jsonLd: WithContext<AboutPage> = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Us",
  description:
    "Learn more about our Director Eileen Fitzgerald and what students have to say about our Speech and Drama school.",
  url: "https://eileenfitzgerald-school.com/about",
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
  title: "About | Eileen Fitzgerald",
  description:
    "About The Eileen Fitzgerald School of Speech and Drama. Meet the team and see what past students say about the school",
  openGraph: {
    title: "About | The Eileen Fitzgerald School of Speech and Drama",
    description:
      "About The Eileen Fitzgerald School of Speech and Drama. Meet the team and see what past students say about the school",
  },
};

const About = () => {
  return (
    <>
      <Script
        id="organisation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Container>
        <Staff />
        <Testimonials />
        <ScrollToTop />
      </Container>
      <ActionBanner />
    </>
  );
};

export default About;
