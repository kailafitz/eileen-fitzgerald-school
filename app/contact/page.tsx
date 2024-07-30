import ContactDetails from "@/components/custom/contactDetails";
import Container from "@/components/custom/container";
import Locations from "@/components/custom/locations";
import React from "react";

const Contact = () => {
  return (
    <>
      <Container className="text-gray-200">
        <ContactDetails />
      </Container>
      <div className="bg-primary mt-10">
        <Container className="mb-10 text-gray-200">
          <Locations />
        </Container>
      </div>
    </>
  );
};

export default Contact;
