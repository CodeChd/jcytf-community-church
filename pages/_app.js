import { AuthProvider } from "@/context/AuthContext";
import "@/styles/Footer.css";
import "@/styles/Quote.css";
import "@/styles/OurStory.css";
import "@/styles/Events.css";
import "@/styles/WhatNext.css";
import "@/styles/Answers.css";
import "@/styles/OurPastor.css";
import "@/styles/globals.css";
import "@/styles/Visit.css";
import "@/styles/Programs.css";
import "@/styles/Partners.css";
import "@/styles/Ministry.css";



function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

