import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
