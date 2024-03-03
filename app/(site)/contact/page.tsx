import Banner2 from "@/Components/Banner2";
import ContactUs from "@/Components/Contact/ContactUs";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="contactBanner">
        <Banner2 header="Contact Us" title="Home / Contact" />
      </div>
      <ContactUs />
    </div>
  );
};

export default page;
