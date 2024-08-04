import ContactDetails from "@/components/custom/contactDetails";
import Container from "@/components/custom/container";
import Locations from "@/components/custom/locations";
import React from "react";

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
