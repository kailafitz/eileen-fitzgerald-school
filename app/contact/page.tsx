import React from "react";
import ContactDetails from "@/components/custom/contactDetails";
import Container from "@/components/custom/container";
import Locations from "@/components/custom/locations";
import { Metadata } from "next";
import ScrollToTop from "@/components/custom/scrollToTop";

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
  );
};

export default Contact;
