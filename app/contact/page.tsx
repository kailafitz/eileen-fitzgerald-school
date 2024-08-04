import ContactDetails from "@/components/custom/contactDetails";
import Container from "@/components/custom/container";
import Locations from "@/components/custom/locations";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact | Eileen Fitzgerald",
  description:
    "Get in touch with The Eileen School of Speech and Drama by email, phone or through social media. Class location details can also be found on this page.",
};

const Contact = () => {
  return (
    <div className="relative w-full overflow-hidden md:overflow-x-clip md:overflow-y-visible">
      <Container className="pb-10">
        <ContactDetails />
      </Container>
      <div className="bg-primary pb-10">
        <Container>
          <Locations />
        </Container>
      </div>
    </div>
  );
};

export default Contact;
