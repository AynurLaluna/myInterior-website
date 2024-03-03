import React from "react";

const Map = () => {
  return (
    <div className="container mx-auto w-[80vw] h-fit">
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6626.344602271597!2d151.19910114177034!3d-33.859450142920416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae5c33fe767b%3A0x5017d681632c120!2sMillers%20Point%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2saz!4v1709473569205!5m2!1sen!2saz"
        width="600"
        height="450"
        loading="lazy"></iframe>
    </div>
  );
};

export default Map;
