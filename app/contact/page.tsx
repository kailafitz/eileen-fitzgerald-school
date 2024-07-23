import ContactDetails from "@/components/custom/contactDetails";
import Container from "@/components/custom/container";
import Locations from "@/components/custom/locations";
import React from "react";

const Contact = () => {
  return (
    <Container className="text-gray-200">
      <h1 className="text-center text-2xl md:text-4xl mt-10 mb-2">
        Contact Us
      </h1>
      <p className="text-center text-base mb-10 md:w-1/2 mx-auto">
        Get in touch with us for more information!
      </p>
      <ContactDetails />
      <Locations />
    </Container>
  );
};

export default Contact;
