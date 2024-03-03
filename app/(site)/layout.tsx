"use client";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        {children}
        <Footer />
      </div>
    </Provider>
  );
}

export default layout;
