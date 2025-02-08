import React from "react";
import Hero from "./components/Hero";

const page = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <section className="z-0 min-h-screen bg-black" />
    </main>
  ) 

};

export default page;
